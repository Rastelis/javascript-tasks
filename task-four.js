
let numberOneTaskFour = rand(0, 2);
let numberTwoTaskFour = rand(0, 2);
let numberThreeTaskFour = rand(0, 2);
let numberFourTaskFour = rand(0, 2);

let amountOfOnes = 0;
let amountOfTwos = 0;
let amountOfZeroes = 0;

if (numberOneTaskFour == 0) amountOfZeroes++;
if (numberOneTaskFour == 1) amountOfOnes++;
if (numberOneTaskFour == 2) amountOfTwos++;

if (numberTwoTaskFour == 0) amountOfZeroes++;
if (numberTwoTaskFour == 1) amountOfOnes++;
if (numberTwoTaskFour == 2) amountOfTwos++;

if (numberThreeTaskFour == 0) amountOfZeroes++;
if (numberThreeTaskFour == 1) amountOfOnes++;
if (numberThreeTaskFour == 2) amountOfTwos++;

if (numberFourTaskFour == 0) amountOfZeroes++;
if (numberFourTaskFour == 1) amountOfOnes++;
if (numberFourTaskFour == 2) amountOfTwos++;

console.log(`Generated numbers: ${numberOneTaskFour}, ${numberTwoTaskFour}, ${numberThreeTaskFour}, ${numberFourTaskFour}. Total amount of zeroes: ${amountOfZeroes}, total amount of ones: ${amountOfOnes}, total amount of twos: ${amountOfTwos}.`);

console.log("***************************************");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}