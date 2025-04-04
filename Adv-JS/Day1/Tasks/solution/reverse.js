function reverse1() {
    console.log(Array.from([].reverse.apply(arguments)))
}

function reverse2() {
     console.log(Array.from(( [].reverse.bind(arguments) )()))
}

// reverse1(1,2,3,4,5)
// reverse2(1,2,3,4,5)