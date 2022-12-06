"use strict";
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

var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        for (var j = 0; j < nums.length; j++) {
            var item2 = nums[j];
            var sum = item + item2;

            if (sum === target) {
                return [i, j];

            }
        }
    }
};


const str = "teSt";
const arr = [1, 2, 3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf(fruit));
"use strict";
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

var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        for (var j = 0; j < nums.length; j++) {
            var item2 = nums[j];
            var sum = item + item2;

            if (sum === target) {
                return [i, j];

            }
        }
    }
};


const str = "teSt";
const arr = [1, 2, 3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf(fruit));
"use strict";
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

var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        for (var j = 0; j < nums.length; j++) {
            var item2 = nums[j];
            var sum = item + item2;

            if (sum === target) {
                return [i, j];

            }
        }
    }
};


const str = "teSt";
const arr = [1, 2, 3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf(fruit));
"use strict";
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

var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var item = nums[i];
        for (var j = 0; j < nums.length; j++) {
            var item2 = nums[j];
            var sum = item + item2;

            if (sum === target) {
                return [i, j];

            }
        }
    }
};


const str = "teSt";
const arr = [1, 2, 3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const frui = "Some fruit";

console.log(frui.indexOf("fruit"));

const logg = "hello world";

console.log(logg.slice(0, 5));

console.log(logg.substr(6, 5));
//numbers

const num = [1, 2, 3, 4, 5];
console.log(Math.random((Math.sqrt(num))));

const test = 12.1;
console.log(parseFloat(test));
console.log('i\'m the');
console.log(`i'm the`);

let srt = 'Hi';

str = 'e' + str[1];
console.log(str);

let stru = "Widget";

if (~str.indexOf("Widget")) {
    console.log('Done!'); // It work
}
//
console.log("Widget with id".includes("Widget"));
console.log("Widget with ".includes("id", 3, 8));

console.log("Widget with id".startsWith("Wid"));
console.log("Widget with id".endsWith("id"));
console.log("Widget with id".slice(5));
console.log("Widget with id".substring(7, 10));