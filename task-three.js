numberOne = rand(0, 25)
numberTwo = rand(0, 25)
let numberThree = rand(0, 25)

console.log("********************task<3>*******************");

let middleNumber;
if (numberOne >= numberTwo && numberOne <= numberThree) middleNumber = numberOne
if (numberOne <= numberTwo && numberOne >= numberThree) middleNumber = numberOne
if (numberTwo >= numberOne && numberTwo <= numberThree) middleNumber = numberTwo
if (numberTwo <= numberOne && numberTwo >= numberThree) middleNumber = numberTwo
if (numberThree >= numberOne && numberThree <= numberTwo) middleNumber = numberThree
if (numberThree <= numberOne && numberThree >= numberTwo) middleNumber = numberThree


console.log(`Number one is ${numberOne}. Number two is ${numberTwo}. Number three is ${numberThree}. The middle nuber is ${middleNumber}`);

console.log("***************************************");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}