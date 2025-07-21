// filepath: f:\CS\Web Dev\ITI\ai\sort\script.js

const arrayContainer = document.getElementById("arrayContainer")

let array = []
let animationSpeed = 50 // Default speed
let paused = false

function sleep(ms) {
  return new Promise((resolve) => {
    function checkPause() {
      if (paused) {
        setTimeout(checkPause, 50)
      } else {
        setTimeout(resolve, ms)
      }
    }
    checkPause()
  })
}

function generateRandomArray(size) {
  array = []
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100) + 1)
  }
  visualizeArray()
}

// highlightIndex: current bar, swapIndex: bar being swapped with
function visualizeArray(highlightIndex = -1, swapIndex = -1) {
  arrayContainer.innerHTML = ""
  array.forEach((value, idx) => {
    const barWrapper = document.createElement("div")
    barWrapper.style.display = "flex"
    barWrapper.style.flexDirection = "column"
    barWrapper.style.alignItems = "center"

    const bar = document.createElement("div")
    bar.style.height = `${value * 3}px`
    bar.className = "bar"
    if (idx === swapIndex) {
      bar.style.backgroundColor = "#e74c3c" // Red for swapping
    } else if (idx === highlightIndex) {
      bar.style.backgroundColor = "#1a237e" // Blue for active
    } else {
      bar.style.backgroundColor = "#3498db"
    }

    const label = document.createElement("span")
    label.textContent = value
    label.style.marginTop = "5px"
    label.style.fontSize = "14px"
    label.style.color = "#333"

    barWrapper.appendChild(bar)
    barWrapper.appendChild(label)
    arrayContainer.appendChild(barWrapper)
  })
}

function setAnimationSpeed(speed) {
  // Lower slider = slower, higher = faster
  // Range: 1 (slowest) to 100 (fastest)
  // We'll map 1 to 500ms, 100 to 5ms
  animationSpeed = 505 - speed * 5
}

document.getElementById("pauseSort").addEventListener("click", () => {
  paused = !paused
  document.getElementById("pauseSort").textContent = paused ? "Resume Sorting" : "Pause Sorting"
})

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// Bubble Sort
async function bubbleSort() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      visualizeArray(j, j + 1)
      await sleep(animationSpeed)
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        visualizeArray(j, j + 1)
        await sleep(animationSpeed)
      }
    }
  }
  visualizeArray()
}

// Quick Sort
async function quickSort(low = 0, high = array.length - 1) {
  if (low < high) {
    const pivotIndex = await partition(low, high)
    await quickSort(low, pivotIndex - 1)
    await quickSort(pivotIndex + 1, high)
  } else {
    visualizeArray()
  }
}

async function partition(low, high) {
  const pivot = array[high]
  let i = low - 1
  for (let j = low; j < high; j++) {
    visualizeArray(j, high)
    await sleep(animationSpeed)
    if (array[j] < pivot) {
      i++
      swap(array, i, j)
      visualizeArray(i, j)
      await sleep(animationSpeed)
    }
  }
  swap(array, i + 1, high)
  visualizeArray(i + 1, high)
  await sleep(animationSpeed)
  return i + 1
}

// Merge Sort
async function mergeSort(start = 0, end = array.length - 1) {
  if (start >= end) return
  const mid = Math.floor((start + end) / 2)
  await mergeSort(start, mid)
  await mergeSort(mid + 1, end)
  await merge(start, mid, end)
  visualizeArray()
}

async function merge(start, mid, end) {
  let left = array.slice(start, mid + 1)
  let right = array.slice(mid + 1, end + 1)
  let i = 0,
    j = 0,
    k = start
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      array[k] = left[i]
      visualizeArray(k, k)
      await sleep(animationSpeed)
      i++
    } else {
      array[k] = right[j]
      visualizeArray(k, k)
      await sleep(animationSpeed)
      j++
    }
    k++
  }
  while (i < left.length) {
    array[k] = left[i]
    visualizeArray(k, k)
    await sleep(animationSpeed)
    i++
    k++
  }
  while (j < right.length) {
    array[k] = right[j]
    visualizeArray(k, k)
    await sleep(animationSpeed)
    j++
    k++
  }
}

// Shell Sort
async function shellSort() {
  let n = array.length
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = array[i]
      let j
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap]
        visualizeArray(j, j - gap)
        await sleep(animationSpeed)
      }
      array[j] = temp
      visualizeArray(j, i)
      await sleep(animationSpeed)
    }
  }
  visualizeArray()
}

// Selection Sort
async function selectionSort() {
  let n = array.length
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i
    for (let j = i + 1; j < n; j++) {
      visualizeArray(i, j)
      await sleep(animationSpeed)
      if (array[j] < array[minIdx]) {
        minIdx = j
      }
    }
    if (minIdx !== i) {
      swap(array, i, minIdx)
      visualizeArray(i, minIdx)
      await sleep(animationSpeed)
    }
  }
  visualizeArray()
}

// Insertion Sort
async function insertionSort() {
  let n = array.length
  for (let i = 1; i < n; i++) {
    let key = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      visualizeArray(j + 1, j)
      await sleep(animationSpeed)
      j--
    }
    array[j + 1] = key
    visualizeArray(j + 1, i)
    await sleep(animationSpeed)
  }
  visualizeArray()
}

// Event listeners
document.getElementById("generate").addEventListener("click", () => generateRandomArray(20))
document.getElementById("bubbleSort").addEventListener("click", bubbleSort)
document.getElementById("quickSort").addEventListener("click", () => quickSort())
document.getElementById("mergeSort").addEventListener("click", () => mergeSort())
document.getElementById("shellSort").addEventListener("click", () => shellSort())
document.getElementById("selectionSort").addEventListener("click", () => selectionSort())
document.getElementById("insertionSort").addEventListener("click", () => insertionSort())
document.getElementById("speed").addEventListener("input", (e) => setAnimationSpeed(e.target.value))

// Initial array
generateRandomArray(20)
