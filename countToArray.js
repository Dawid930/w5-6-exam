/* function countToArray(firstNumber, lastNumber) {
    let numbers = [];
    for (let i = firstNumber; i < lastNumber; i++) {
        //numbers.push(i.toString())  //igy egybol berakja stringbe
        //numbers.push(""+i)
        //numbers.push(String(i))
        //numbers.push(`${i}`)
        //let stringNumber = i.toString()
       // numbers.push(stringNumber)

    }
    return numbers;
}

console.log(countToArray(10, 30));
 */

// array functionnal

/* countToArray = (firstNumber, lastNumber) => {
    let numbers = [];
    for (let i = firstNumber; i < lastNumber; i++) {
        numbers.push(`${i}`)
    }
    return numbers;
}    

console.log(countToArray(20, 30));
 */
/* 
const countToArray = (firstNumber, lastNumber) => {
    const numbers = [];
    for (let i = firstNumber; i < lastNumber; i++) {
        numbers.push(`${i}`)
    }
    return numbers;
}    

console.log(countToArray(20, 30));
 */

//
/* 
const countToArray = (firstNumber, lastNumber) => {
    const toArray = Array(lastNumber - firstNumber)
    const fillArray = Array.from(toArray)
    const updateArray = fillArray.map((item, i) => `${firstNumber + i}`)
    return updateArray
}

console.log(countToArray(20, 30));

 */


// ez a felso csak egy sorba pakolva
const countToArray = (firstNumber, lastNumber) => updateArray = Array.from(Array(lastNumber - firstNumber)).map((item, i) => `${firstNumber + i}`)


console.log(countToArray(20, 30));

