numberArray = [rand(-10, 10), rand(-10, 10), rand(-10, 10)];

numberArray.forEach(printToConsole)
console.log("********************task<6>*******************");
for (let i = 0; i < 3; i++) {
    if (numberArray[i] < 0) document.write (`<p style="display: inline; color: green;">${numberArray[i]},</p>`);
    if (numberArray[i] == 0) document.write (`<p style="display: inline; color: red;"> ${numberArray[i]},</p>`);
    if (numberArray[i] > 0) document.write (`<p style="display: inline; color: blue;"> ${numberArray[i]}</p>`);
}

console.log("***************************************");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function printToConsole(output) {
    console.log(`${output} `);
}