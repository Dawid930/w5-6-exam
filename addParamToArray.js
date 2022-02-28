/* 

function addParamToArray(myArray, myItem) {
    myArray.push(myItem)
    return myArray
}
console.log(addParamToArray([1, 2], 3));

 */
// arrow functionnal

const addParamToArray = (myArray, myItem) => {
    myArray.push(myItem)
    return myArray
    
}

console.log(addParamToArray([1, 2], 3));