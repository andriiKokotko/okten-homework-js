// const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;

// // while (i < arr.length) {
// //   console.log(i + ': ' + arr[i])
// //   i++;
// // }

// for (let i = arr.length - 1; i >= 0; i--) {
//   // if (arr[i] % 3 === 0) {
//   //   arr[i] = 'okten'
//   // }

//   console.log(i + ': ' + arr[i])
// }

const arr = [];

for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    arr.push(i)
  }
}

console.log(arr)