let query = location.search.slice(1).split('&')
console.log(query)

let info = []

for(let i = 0; i < query.length; i++) {
    let p = query[i].split('=')
    info[p[0]] = p[1]
}

const h1 = document.querySelector('h1')
const address = document.querySelector('li.address')
const gender = document.querySelector('li.gen')
const email = document.querySelector('li.em')
const country = document.querySelector('li.country')

info['address'] = info['address'].replaceAll('%20', ' ')
info['address'] = info['address'].replaceAll('+', ' ')
info['address'] = info['address'].replaceAll('%2C', ', ')
info['email'] = info['email'].replace('%40', '@')


h1.innerHTML += ' ' + info['first-name'] + ' ' + info['last-name']
address.innerHTML += info['address']
gender.innerHTML += info['gender']
email.innerHTML += info['email']
country.innerHTML += info['country']

if(!navigator.userAgent.includes('Chrome') || navigator.userAgent.includes('Edg') || navigator.userAgent.toLowerCase().includes('firefox')) {
    alert('Please use Google Chrome')
}