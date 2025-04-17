function add() {
    if (arguments.length === 0) {
        let err = new Error('You must provide at least one argument');
        throw err
    }
    let res = 0
    for (let i=0; i<arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            let err = new Error('All arguments must be numbers');
            throw err
        }
        res += arguments[i]
    }
    console.log(res)
}

// add(1,2,3,4,5)
// add()
add(1,2,4,1,2,'hello')