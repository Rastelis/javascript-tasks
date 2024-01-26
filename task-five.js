
let numberOneTaskFive = rand(1, 6);

console.log(`Generated nuber is: ${numberOneTaskFive}`)

switch (numberOneTaskFive) {
    case 1: 
    document.write(`<h1>1</h1>`);
    break;
    case 2: 
    document.write(`<h2>2</h2>`);
    break;
    case 3: 
    document.write(`<h3>3</h3>`);
    break;
    case 4: 
    document.write(`<h4>4</h4>`);
    break;
    case 5: document.write(`<h5>5</h5>`);
    break
    default:
        document.write(`<h6>6</h6>`);
}

console.log("***************************************");

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}