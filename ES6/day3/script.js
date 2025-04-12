const delayedMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world');
        }, 3000);
    });
}
delayedMessage().then(msg => console.log(msg))



const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data recieved')
        }, 2000);
    }).then(data => {
        data = data.toUpperCase();
        return data;
    })
}
fetchData().then(data => console.log(data))



const modifiedFetchData = () => {
    return new Promise((resolve, reject) => {
        reject('Network Error')
        setTimeout(() => {
            resolve('Data recieved')
        }, 2000);
    }).then(data => {
        data = data.toUpperCase();
        return data;
    }).catch(err => {
        throw (`Error: ${err}`)
    })
}
modifiedFetchData()



const fetchUsers = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {

            const users = JSON.parse(xhr.responseText);
            console.log(users);
            document.body.appendChild(document.createElement('ul'))

            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;
                document.querySelector('ul').appendChild(li);
            });
        } else if (xhr.readyState === 4) {
            console.error('Error fetching users');
        }
    }

    xhr.send();
}
fetchUsers();



const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
        if (!response.ok) {
            throw new Error('Error fetching posts');
        }
        return response.json();
    }).then(posts => {
        for (let i=0; i<5; i++) {
            console.log(posts[i]);
        }
    }).catch(err => {
        console.error(err);
    });
}
getPosts()



const getPostsAsync = async () => {
    try {
      const fetchedData = await fetch("https://jsonplaceholder.typicode.com/posts")
      if (!fetchedData.ok) {
        throw new Error("Error fetching posts")
      }
      const posts = await fetchedData.json()
      for (let i = 0; i < 5; i++) {
        console.log(posts[i])
      }
    } catch (err) {
      console.error(err)
    }
}
getPostsAsync()



