let index = 0;
let imgs = document.images
imgs[index].src = 'images/marble3.jpg'

function animation() {
    imgs[index].src = 'images/marble1.jpg'
    index = index < imgs.length ? ++index : 0
    imgs[index].src = 'images/marble3.jpg'
}

let myInterval = setInterval(animation, 1000);

function resume() {
    myInterval = setInterval(animation, 1000);
}