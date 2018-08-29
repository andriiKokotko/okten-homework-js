function minNum(a, b, c) {
  if (a < b && b < c) console.log(a)
  if (a < c && c < b) console.log(a)
  if (b < c && c < a) console.log(b)
  if (b < a && a < c) console.log(b)
  if (c < b && b < a) console.log(c)
  if (c < a && a < b) console.log(c)
}

function maxNum(a, b, c) {
  if (a > b && b > c) console.log(a)
  if (a > c && c > b) console.log(a)
  if (b > c && c > a) console.log(b)
  if (b > a && a > c) console.log(b)
  if (c > b && b > a) console.log(c)
  if (c > a && a > b) console.log(c)
}

function minMax(...numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  console.log(min + ' ' + max);
  return min;
}

function printArr(array) {
  console.log(array)
}

function maxEl(arr) {
  return Math.max(...arr)
}

function minEl(arr) {
  return Math.min(...arr)
}

function randomArr() {
  let arr = [];
  const randomNum = Math.floor(Math.random() * 10);

  for (let i = 0; i < randomNum; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }

  return arr
}

function minMaxElementOfRandomArr(randomArray) {
  console.log(`input: ${randomArray}
    max element: ${maxEl(randomArray)}
    min element: ${minEl(randomArray)}`)
}

function arraySum(arr) {
  let sum = 0;
  for (const el of arr) {
    sum += el
  }
  console.log(arr)
  console.log(sum)
}

// minNum(3, 4, 5)
// maxNum(3, 4, 5)
// minMax(1, 5, 78, -4, 67)
// printArr([1, 45, -45, 7, 56])
// randomArr()
// maxEl([4, 567, 67567, 6465])

minMaxElementOfRandomArr(randomArr())
arraySum(randomArr())