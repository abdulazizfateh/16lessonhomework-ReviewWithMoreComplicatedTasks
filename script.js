// REVIEW THE TASKS, MORE COMPLICATED - TASK 1 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let arr = [
//     {
//         name: 'lorem1',
//         id: 44,
//         debt: 100,
//     },
//     {
//         name: 'lorem1',
//         id: 44,
//         debt: 100,
//     },
//     {
//         name: 'lorem1',
//         id: 44,
//         debt: 100,
//     },
//     {
//         name: 'lorem1',
//         id: 1,
//         debt: 0,
//     },
// ];

// const sumDebt = (arr) => {
//     let sumDebt = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumDebt += arr[i].debt;
//         arr[i].debt = 0;
//         if (arr[i].id == 1) {
//             arr[i].debt = sumDebt;
//         }
//     }
//     return arr;
// }

// console.log(sumDebt(arr));









// REVIEW THE TASKS, MORE COMPLICATED - TASK 2 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let a = 11;
// const checkThePrime = (num) => {

//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (a % i == 0) {
//             count++;
//         }
//     }
//     if (a <= 1) {
//         return `Siz kiritgan son tub yoki tub emaslikka ajralmaydi`;
//     }
//     if (count == 2) {
//         return `Tub son`;
//     }
//     return 'Tub son emas';
// }

// console.log(checkThePrime(a));









// REVIEW THE TASKS, MORE COMPLICATED - TASK 3 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let arr = [
//     {
//         name: 'Muhammadjon',
//         id: 19
//     },
//     {
//         name: 'Abdulaziz',
//         id: 17
//     },
//     {
//         name: 'Fathullo',
//         id: 10
//     },
//     {
//         name: 'Nasibullo',
//         id: 23
//     },
// ];


// const isPrime = (id) => {
//     let count = 0;
//     for (let i = 1; i <= id; i++) {
//         if (id % i == 0) {
//             count++;
//         }
//     }
//     return count == 2;
// }

// const checkTheNum = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i].id)) {
//             newArr.push(arr[i].id)
//         }
//     }
//     return newArr;
// }
// console.log(checkTheNum(arr));









// REVIEW THE TASKS, MORE COMPLICATED - TASK 4 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let arr = [1, 2, 2, 3];


// const removeTheDuplicate = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let num = newArr.find((item) => {
//             if (item == arr[i]) { // item har gal newArr ga qoshilgan barcha qiymatga teng boladimi?
//                 return true;
//             } else {
//                 return false;
//             }
//         });
//         if (!num) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(removeTheDuplicate(arr));









// REVIEW THE TASKS, MORE COMPLICATED - TASK 5 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Using find method

// let arr = [
//     {
//         name: 'Abdulaziz',
//         id: 1
//     },
//     {
//         name: 'Abdulaziz',
//         id: 2
//     },
//     {
//         name: 'Abdulaziz',
//         id: 2
//     },
//     {
//         name: 'Abdulaziz',
//         id: 3
//     }
// ];


// const removeTheDuplicate = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let num = newArr.find((item) => item.id == arr[i].id);
//         if (!num) {
//             newArr.push(arr[i]); // id ni o'zini olmoqchi bo'lsam noto'g'ri chiqyapti
//         }
//     }
//     return newArr;
// }

// console.log(removeTheDuplicate(arr));




// Using includes method

// let arr = [
//     {
//         name: 'Abdulaziz',
//         id: 1
//     },
//     {
//         name: 'Abdulaziz',
//         id: 2
//     },
//     {
//         name: 'Abdulaziz',
//         id: 2
//     },
//     {
//         name: 'Abdulaziz',
//         id: 3
//     }
// ];

// const removeTheDuplicate = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i].id)) {
//             newArr.push(arr[i].id);
//         }
//     }
//     return newArr;
// }

// console.log(removeTheDuplicate(arr));