
let candleAmount = rand (5, 3000);
let totalCost ='';

console.log (`Generated amount of Candles: ${candleAmount}.`)

if (candleAmount >= 1000) {
    totalCost = candleAmount - candleAmount * 0.03;
}
else if (candleAmount >= 2000) {
    totalCost = candleAmount - candleAmount * 0.04;
}
else totalCost = candleAmount;

totalCost = totalCost.toFixed(2);

console.log (`Total cost of the specified amount ${totalCost}`)

console.log("***************************************");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
