//02.12.22;

//CURRENCY OF 
// const usdCurr = 75;
// const discount = 0.9;
// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);

// const usdCurr = 75;
// const discount = 0.9;
// function convert(amount, curr) {

//     return amount * curr;
// }

// function promotion(result) {
//     console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);

// function test () {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) {
//             return;
//         }

//     } console.log("doneee");
// }

// test();

// // 
// function doNothing() {};
// console.log(doNothing()=== undefined);

// work Exercise 6:
//1
function sayHello(name) {
    return `Привет ${name}!`;
}
sayHello('Erlan');

//2
function inBetween(a) {
    return [a - 1, a, a + 1];

}
inBetween();
console.log(inBetween(5));

//3
function getMathResult(num, progressive) {
    if (typeof (progressive) !== 'number' || progressive <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= progressive; i++) {
        if (i === progressive) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return str;
}
getMathResult();
console.log(getMathResult(2, 2));


function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);