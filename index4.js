function randomArr(length, range) {
  let arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * range));
  }

  return arr;
}

function sortArr(arr, callback) {
  return callback(arr)
}

function increase(array) {
  return array.sort((a, b) => a - b)
}

function decrease(array) {
  return array.sort((a, b) => b - a)
}

console.log(sortArr([5, 3, 8, 2, 7, 5, 7], increase));
console.log(sortArr([5, 3, 8, 2, 7, 5, 7], decrease));

function mergeArrays(arr1, arr2) {
  arr1.push(...arr2);
  return arr1;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

function reduceArr(arr1, arr2, callback) {
  callback(arr1, arr2);
}

reduceArr(randomArr(3, 10), randomArr(3, 10), (...arrays) => {
  arrays.forEach(el => console.log(el, el.reduce((prev, next) => prev + next)))
})