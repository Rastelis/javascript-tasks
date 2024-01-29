let time = {
    hours: rand(0, 23),
    minutes: rand(0, 59),
    seconds: rand(0, 59)
};

let timePassed = rand(0, 300);

console.log(`${time.hours}h: ${time.minutes}min: ${time.seconds}s:`)

console.log(`Time passed: ${timePassed}s`)


for (let i = 2; i >= 0; i--) {
    if (timePassed != 0) {
        if (i == 2) {
            if (time['seconds'] + timePassed > 60) {
                time['seconds'] = (time['seconds'] + timePassed) % 60;
                timePassed = Math.floor((time['seconds'] + timePassed) / 60);

            }
            else if (time['seconds'] + timePassed == 60) {
                timePassed = 1;
                time['seconds'] = 0;
            }
            else {
                time['seconds'] += timePassed;
                timePassed = 0;
            }
        }
        else if (i == 1) {
            if (time['minutes'] + timePassed > 60) {
                time['minutes'] = (time['minutes'] + timePassed) % 60;
                timePassed = Math.floor((time['minutes'] + timePassed) / 60);
            }
            else if (time['minutes'] + timePassed == 60) {
                timePassed = 1;
                time['minutes'] = 0;
            }
            else {
                time['minutes'] += timePassed;
                timePassed = 0;
            }
        }
        else {
            if (time['hours'] + timePassed > 24) {
                time['hours'] = (time['hours'] + timePassed) % 24
            }
            else if (time['hours'] + timePassed == 24) {
                time['hours'] = 0;
            }
            else {
                time['hours'] += timePassed;
            }
        }
    }
}

console.log(`Current time ${time.hours}h: ${time.minutes}min: ${time.seconds}s:`)


console.log("***************************************");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}