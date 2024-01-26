let name = "Laimis";
let surName = "Kirsa";
let dateOfBirth = [rand(1800, 2024), rand(1, 12), rand(1, 30)];
let dateNow = [2024, 1, 25];
let age = calculateAge(dateOfBirth, dateNow);

console.log(`I am ${name} ${surName} my date of birth is ${dateOfBirth} and I am ${age} years old`)
console.log("***************************************");

function calculateAge(dateOfBirth, dateNow) {
    
    let yy = dateNow[0] - dateOfBirth[0];

    if (dateNow[1] < dateOfBirth[1]) {
        yy--;
        return yy;
    }

    else if (dateNow[1] == dateOfBirth[1]) {
        if (dateNow[2] < dateOfBirth[2]) {
            yy--;
        }
        return yy;
    }

    else {
        return yy;
    }
}
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}