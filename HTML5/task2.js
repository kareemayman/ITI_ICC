const h1 = document.querySelector('h1')

const redSlider = document.querySelector('#red')
const greenSlider = document.querySelector('#green')
const blueSlider = document.querySelector('#blue')

document.addEventListener('change', (e) => {

    if (e.target.matches('input')) {
        h1.style.color = `rgb(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value})`
    }
})