function func(a, b) {
    if (arguments.length !== 2) {
        let err = new Error('You need to enter 2 numbers exactly!')
        throw err
    }
    console.log('You entered ' + a + ' and ' + b)
}

func(1,10)