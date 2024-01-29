
 numberOne = rand(0, 4)
 numberTwo = rand(0, 4)
let answer;

console.log("********************task<2>*******************");

if (numberTwo != 0 && numberOne != 0) {
    if (numberOne < numberTwo) {
        answer = numberTwo / numberOne;
    }
    else {
        answer = numberOne / numberTwo;
    }
    console.log(`Number one is ${numberOne}. Number two is ${numberTwo}. Division is ${answer}`);
}
else if (numberOne == 0 && numberTwo == 0) {
    console.log(" Number one is ${numberOne }. Number two is ${numberTwo }. Division is 0")
}
else console.log("Number one is ${numberOne }. Number two is ${numberTwo }. Divison is infinity")

console.log("***************************************");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}