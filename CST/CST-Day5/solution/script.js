function sortArr(nums) {
    let sortedArr = nums.sort(function(a, b){return b - a});
    console.log('Sorted Numbers: ' + sortedArr + '\nReversed Numbers: ' + sortedArr.reverse());
}

sortArr([10,100,1,6,60,43,200,-1,190]);

function address(obj) {
    let date = new Date()
    console.log(obj.buildingNum + ' ' + obj.street + ', ' + obj.city + ' city registered in ' + date.toLocaleDateString('en-gb'))
}

address({buildingNum: 123, street: 'Main Street', city: 'New York'})

function dispVal(obj, key) {
    if (obj[key.toLowerCase()] == undefined) {console.log('Key not found'); return}
    if (/^(age)$/i.test(key)) {
        console.log(obj[key.toLowerCase()] + ' years old');
    } else {
        console.log(obj[key.toLowerCase()]);
    }
}

dispVal({name: 'John', age: 30}, 'AGE')

