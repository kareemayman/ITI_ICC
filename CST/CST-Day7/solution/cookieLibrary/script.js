const button = document.querySelector('button');
const userName = document.querySelector('input[type="text"]')
const age = document.querySelector('input[type="number"]')
const gender = document.querySelectorAll('input[type="radio"]')
const color = document.querySelector('select')

button.addEventListener('click', function() {

    setCookie('userName', userName.value)
    setCookie('age', age.value)
    setCookie('color', color.value)

    for (let i=0; i<2; i++) {
        if (gender[i].checked) {
            setCookie('gender', gender[i].value)
        }
    }

    location.assign('welcome.html');
})