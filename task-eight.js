

let numberArray = fillArrayWithRandomNumbers(50, 0, 100);
console.log("********************task<8>*******************");
// numberArray.forEach(printToConsole);

console.log(`Array average is: ${average(numberArray).toFixed()}`)

let modifiedNumberArray = modifyArray(numberArray);

// modifiedNumberArray.forEach(printToConsole)
if (modifiedNumberArray.length == 0) console.log("There are no nubers left after removing all numbers below 10 and above 90 ")
else console.log(`Modified array average is: ${average(modifiedNumberArray).toFixed()}`)


console.log("***************************************");

function modifyArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 10) {
            array.splice(i, 1)
            i--;
        }
        else if (array[i] > 90) {
            array.splice(i, 1)
            i--;
        }
    }
    return array;
}

function average(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i];
    }
    average /= array.length;
    return average
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function fillArrayWithRandomNumbers(arraySize, min, max) {
    let array = [];
    for (let i = 0; i < arraySize; i++) {
        array[i] = rand(min, max);
    }
    return array
}

function printToConsole(output) {
    console.log(`${output} `);
}