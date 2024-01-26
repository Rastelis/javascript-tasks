numberArrayTaskSix = [rand(-10, 10), rand(-10, 10), rand(-10, 10)];

numberArrayTaskSix.forEach(printToConsole)

for (let i = 0; i < 3; i++) {
    if (numberArrayTaskSix[i] < 0) document.write (`<p style="display: inline; color: green;">${numberArrayTaskSix[i]},</p>`);
    if (numberArrayTaskSix[i] == 0) document.write (`<p style="display: inline; color: red;"> ${numberArrayTaskSix[i]},</p>`);
    if (numberArrayTaskSix[i] > 0) document.write (`<p style="display: inline; color: blue;"> ${numberArrayTaskSix[i]}</p>`);
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