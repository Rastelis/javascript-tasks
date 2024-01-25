
let numberOneTaskTwo = rand(0,4)
let numberTwoTaskTwo = rand(0,4)
let answerTaskTwo;
if (numberTwoTaskTwo != 0 && numberOneTaskTwo != 0) {
    if(numberOneTaskTwo < numberTwoTaskTwo) {
        answerTaskTwo = numberTwoTaskTwo / numberOneTaskTwo;
    }
    else {
        answerTaskTwo = numberOneTaskTwo / numberTwoTaskTwo;
    }
    console.log(`Number one is ${numberOneTaskTwo}. Number two is ${numberTwoTaskTwo}. Division is ${answerTaskTwo}`);
}
else if (numberOneTaskTwo == 0 && numberTwoTaskTwo == 0 ) {
    console.log(" Number one is ${numberOneTaskTwo}. Number two is ${numberTwoTaskTwo}. Division is 0")
}
else console.log("Number one is ${numberOneTaskTwo}. Number two is ${numberTwoTaskTwo}. Divison is infinity") 

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}