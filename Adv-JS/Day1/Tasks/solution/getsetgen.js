let testObj = {
    name: 'Kareem',
    gender: 'male',
    func: function() {
        console.log('Hello');
    },
}

function getSetGen(obj) {
    for (let key in obj) {
        if (typeof obj[key] !== 'function') {
            let getStr = `get${key}`
            let setStr = `set${key}`
            obj[getStr] = function() {
                return obj[key];
            }
            obj[setStr] = function(val) {
                obj[key] = val;
            }
        }
    }
}

// getSetGen(testObj);
// console.log(testObj);
// console.log(testObj.getname());
// testObj.setname('ali')
// console.log(testObj.getname());
// console.log(testObj);

// console.log(testObj.getgender());
// testObj.setname('Ali');
// console.log(testObj.getname());