const notficationButton = document.querySelector(".notification-button")
const form = document.querySelector("#todo-form")
const taskList = document.querySelector(".task-list")

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope)
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error)
      })
  }

  if (
    ("Notification" in window && Notification.permission === "granted") ||
    Notification.permission === "denied"
  ) {
    notficationButton.style.display = "none"
  } else {
    notficationButton.addEventListener("click", () => {
      if ("Notification" in window && Notification.permission !== "granted") {
        Notification.requestPermission()
          .then((permission) => {
            if (permission === "granted") {
              console.log("Notifications enabled")
              notficationButton.style.display = "none"
            } else {
              console.log("Notifications denied")
              notficationButton.style.display = "none"
            }
          })
          .catch((error) => {
            console.error("Error requesting notification permission:", error)
          })
      }
    })
  }

  // Initialize IndexedDB with upgrade callback
  const dbPromise = idb.open("todo-db", 1, (upgradeDB) => {
    // Create the "tasks" object store if it doesn't exist
    if (!upgradeDB.objectStoreNames.contains("tasks")) {
      console.log("Creating object store 'tasks'")
      upgradeDB.createObjectStore("tasks", {
        keyPath: "id",
        autoIncrement: true,
      })
    }
  })

  // Load existing tasks from IndexedDB
  dbPromise
    .then((db) => {
      const tx = db.transaction("tasks", "readonly")
      const store = tx.objectStore("tasks")
      return store.getAll()
    })
    .then((tasks) => {
      tasks.forEach((task) => {
        const taskItem = document.createElement("div")
        taskItem.className = "task-item"
        taskItem.innerHTML = `
          <h3>${task.title}</h3>
          <p>Due: <span class='date'>${task.date}</span> ${task.hours}:${task.minutes
          .toString()
          .padStart(2, "0")}</p>
          <button class="delete-task" data-id="${task.id}">Delete</button>
        `
        taskList.appendChild(taskItem)
      })
    })
    .catch((error) => {
      console.error("Error loading tasks:", error)
    })

  // handle submitting the form
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const taskTitle = document.querySelector("#taskTitle").value
    const date = document.querySelector("#date").value
    const hours = document.querySelector("#hours").value
    const minutes = document.querySelector("#minutes").value

    if (!taskTitle.trim() || !date || !hours || !minutes) {
      alert("Please fill in all fields")
      return
    } else if (
      date < new Date().toISOString().split("T")[0] ||
      (date === new Date().toISOString().split("T")[0] &&
        (hours < new Date().getHours() ||
          (hours == new Date().getHours() && minutes <= new Date().getMinutes())))
    ) {
      alert("Please select a valid date in the future")
      return
    }

    const task = {
      title: taskTitle,
      date: date,
      hours: parseInt(hours, 10),
      minutes: parseInt(minutes, 10),
    }

    // Save the task to IndexedDB
    dbPromise
      .then((db) => {
        const tx = db.transaction("tasks", "readwrite")
        const store = tx.objectStore("tasks")
        store.add(task)
        store.getAll().then((tasks) => {
          taskList.innerHTML = "" // Clear the task list
          tasks.forEach((task) => {
            const taskItem = document.createElement("div")
            taskItem.className = "task-item"
            taskItem.innerHTML = `
              <h3>${task.title}</h3>
              <p>Due: <span class='date'>${task.date}</span> ${task.hours}:${task.minutes
              .toString()
              .padStart(2, "0")}</p>
              <button class="delete-task" data-id="${task.id}">Delete</button>
            `
            taskList.appendChild(taskItem)
          })
        })
        return tx.complete
      })
      .then(() => {
        form.reset()
        // alert("Task added successfully!")
      })
      .catch((error) => {
        console.error("Error adding task:", error)
      })
  })

  // handle deleting task
  taskList.addEventListener("click", (e) => {
    if (e.target.matches(".delete-task")) {
      const taskId = parseInt(e.target.getAttribute("data-id"), 10)
      dbPromise
        .then((db) => {
          const tx = db.transaction("tasks", "readwrite")
          const store = tx.objectStore("tasks")
          return store.delete(taskId)
        })
        .then(() => {
          e.target.closest(".task-item").remove()
        })
        .catch((error) => {
          console.error("Error deleting task:", error)
        })
    }
  })

  function checkDueTasks() {
    dbPromise.then((db) => {
      const tx = db.transaction("tasks", "readwrite")
      const store = tx.objectStore("tasks")
      store.getAll().then((tasks) => {
        const now = new Date()
        tasks.forEach((task) => {
          const dueDate = new Date(
            `${task.date}T${String(task.hours).padStart(2, "0")}:${String(task.minutes).padStart(
              2,
              "0"
            )}:00`
          )
          if (dueDate <= now) {
            // Show notification if permission granted
            if (
              "serviceWorker" in navigator &&
              "Notification" in window &&
              Notification.permission === "granted"
            ) {
              navigator.serviceWorker.ready.then((reg) => {
                reg.showNotification("Task Due!", {
                  body: `Task "${task.title}" is due now!`,
                  icon: "images/task.png", // Optional: your icon path
                })
              })
            }
            // Remove from DB
            store.delete(task.id)
            // Remove from UI
            const taskElem = taskList.querySelector(`[data-id="${task.id}"]`)?.closest(".task-item")
            if (taskElem) taskElem.remove()
          }
        })
      })
      return tx.complete
    })
  }

  // Check every minute
  setInterval(checkDueTasks, 5000)
})
