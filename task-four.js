
numberOne = rand(0, 2);
numberTwo = rand(0, 2);
numberThree = rand(0, 2);
let numberFour = rand(0, 2);

let amountOfOnes = 0;
let amountOfTwos = 0;
let amountOfZeroes = 0;
console.log("********************task<4>*******************");
if (numberOne == 0) amountOfZeroes++;
if (numberOne == 1) amountOfOnes++;
if (numberOne == 2) amountOfTwos++;

if (numberTwo == 0) amountOfZeroes++;
if (numberTwo == 1) amountOfOnes++;
if (numberTwo == 2) amountOfTwos++;

if (numberThree == 0) amountOfZeroes++;
if (numberThree == 1) amountOfOnes++;
if (numberThree == 2) amountOfTwos++;

if (numberFour == 0) amountOfZeroes++;
if (numberFour == 1) amountOfOnes++;
if (numberFour == 2) amountOfTwos++;

console.log(`Generated numbers: ${numberOne}, ${numberTwo}, ${numberThree}, ${numberFour}. Total amount of zeroes: ${amountOfZeroes}, total amount of ones: ${amountOfOnes}, total amount of twos: ${amountOfTwos}.`);

console.log("***************************************");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}