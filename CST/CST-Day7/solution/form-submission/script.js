document.forms[0].addEventListener('submit', function(e) {
    let confirm = window.confirm('Are you sure you want to submit?')
    if (!confirm) {
        e.preventDefault()
    }
})

let myEvent = new Event('custEvent')
document.forms[0].addEventListener('custEvent', function() {
    alert('Please fill in all fields')
})

let nameInput = document.querySelector('input[type="text"]')
let ageInput = document.querySelector('input[type="number"]')
setTimeout(function() {
    if (nameInput.value.trim() === '' && ageInput.value.trim() === '') {
        document.forms[0].dispatchEvent(myEvent)
    }
}, 3000)