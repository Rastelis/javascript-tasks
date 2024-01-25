let numberOneTaskThree =rand(0,25)
let numberTwoTaskThree =rand(0,25)
let numberThreeTaskThree =rand(0,25)



let middleNumber;
if (numberOneTaskThree >= numberTwoTaskThree  && numberOneTaskThree <= numberThreeTaskThree ) middleNumber = numberOneTaskThree
if (numberOneTaskThree <= numberTwoTaskThree  && numberOneTaskThree >= numberThreeTaskThree ) middleNumber = numberOneTaskThree
if (numberTwoTaskThree >= numberOneTaskThree  && numberTwoTaskThree <= numberThreeTaskThree ) middleNumber = numberTwoTaskThree
if (numberTwoTaskThree <= numberOneTaskThree && numberTwoTaskThree >= numberThreeTaskThree ) middleNumber = numberTwoTaskThree
if (numberThreeTaskThree >= numberOneTaskThree  && numberThreeTaskThree <= numberTwoTaskThree ) middleNumber = numberThreeTaskThree
if (numberThreeTaskThree <= numberOneTaskThree  && numberThreeTaskThree >= numberTwoTaskThree ) middleNumber = numberThreeTaskThree


console.log(`Number one is ${numberOneTaskThree}. Number two is ${numberTwoTaskThree}. Number three is ${numberThreeTaskThree}. The middle nuber is ${middleNumber}`);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}