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
    // let sum = 0;
    // return num + num, progressive++;
    for (let i = 0; i <= num; i++) {
        for (let j = 0; i+i; j <= progressive; i+i) {
            console.log(num, progressive);
        }
    }
}
getMathResult();
console.log(getMathResult(5, 3));

numbers = [1, 2, 3, 4, 5];

function doubling(number) {
    number *= 2;
    return number;
}

obj = {};
for (var i = 0; i < numbers.length; i++)
    doubled = doubling(numbers[i]);
obj[numbers[i]] = doubled;
console.log(obj);