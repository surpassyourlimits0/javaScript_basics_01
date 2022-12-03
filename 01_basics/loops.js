//Prime   num!
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
// for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
// }
//     return num > 1;}

// function getPrime(num) {

// }

// let result = '';
// const length = 7;

// for (let i = 1; i <= length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//         console.log('1');
//     }
//     result += '\n';
//     console.log('2');

// }
// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) { break first; }
//             console.log(`Third level ${k}`);
//         }
//     }
// }


// let i, j;

// loop1:
// for (i = 0; i < 3; i++) {
//     console.log('1');    //Первый цикл, обозначенный меткой "loop1"
//     loop2:
//     for (j = 0; j < 3; j++) {
//         console.log('2'); //Второй цикл, обозначенный меткой "loop2"
//         if (i === 1 && j === 1) {
//             console.log('3');
//             continue loop1;
//         }
//         console.log('i = ' + i + ' j = ' + j);
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let i = 2;
// while (i <= 16, i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else if (i === 16) {
//         break;
//     } else {
//         console.log(i);
//     }
// }
//  for (let i = 0; i < 12; i++) {
//      console.log(i);
//      console.log('finish!');
//      for (let j = i * 2; j < 7; j++) {
//          console.log(`${j}`, 'j');
//          console.log('second loop');
//      }
//  }

/**ЗАПОМНИ ЭТО ОБЯЗАТЕЛЬНО!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

// function getPrimes(num) {
//     const seiev = [];
//     const primes = [];

//     for (let i = 2; i <= num; i++) {
//         if (!seiev[i]) {
//             primes.push(i);
//             for (let j = i * i; j <= num; j += i) {
//                 seiev[j] = true;
//             }
//         }
//     }
//     return primes;

// }
// console.log(getPrimes(120));

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let j = 2;

while (j) {
    console.log(j++);
    if (j % 2 === 0) {
        continue;
    }
}