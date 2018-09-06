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
  return callback(arr1, arr2);
}

reduceArr(randomArr(3, 10), randomArr(3, 10), (...arrays) => {
  arrays.forEach(el => console.log(el, el.reduce((prev, next) => prev + next)))
})

reduceArr(randomArr(3, 10), randomArr(3, 10), (arr1, arr2) => {
  let newArr = [];

  for (const i in arr1) {
    newArr.push(arr1[i] + arr2[i]);
  }

  console.log(arr1, arr2, newArr);
});

reduceArr(randomArr(4, 10), randomArr(5, 10), (arr1, arr2) => {
  arr1.push(...arr2);
  console.log(arr1);
})

reduceArr(randomArr(4, 10), randomArr(5, 10), (arr1, arr2) => {
  arr1.push(...arr2);
  const sortedArr = arr1.sort((a, b) => a - b).filter((_, index) => arr1[index] !== arr1[index + 1]);
  console.log(arr1);
  console.log(sortedArr);
})

function isRepeatedElements(arr) {
  return arr.filter((_, index) => arr[index] === arr[index + 1]).length !== 0 ? 'Yes' : 'No';
}

console.log(isRepeatedElements([3, 5, 6, 6, 5, 7, 8, 9]));

function indexOfElement(arr, el) {
  let index = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      index.push(i);
    }
  }

  if (index.length !== 0) {
    console.log(arr, ...index);
  } else console.log('No such element');
}

indexOfElement([3, 54, 3, 8, 5], 3);
indexOfElement([3, 54, 6, 8, 5], 5);
indexOfElement([3, 54, 6, 8, 5], 6);
indexOfElement([3, 54, 6, 8, 5], 10);

function addition(arr1, arr2) {
  let newArr = [];
  
  if (arr1.length === arr2.length) {
    for (const i in arr1) {
      newArr.push(arr1[i] + arr2[i])
    }
  }

  return newArr;
}

function subtraction(arr1, arr2) {
  let newArr = [];
  
  if (arr1.length === arr2.length) {
    for (const i in arr1) {
      newArr.push(arr1[i] - arr2[i])
    }
  }

  return newArr;
}

function multiplication(arr1, arr2) {
  let newArr = [];
  
  if (arr1.length === arr2.length) {
    for (const i in arr1) {
      newArr.push(arr1[i] * arr2[i])
    }
  }

  return newArr;
}

function division(arr1, arr2) {
  let newArr = [];
  
  if (arr1.length === arr2.length) {
    for (const i in arr1) {
      newArr.push(arr1[i] / arr2[i])
    }
  }

  return newArr;
}

function mergeArr(arr1, arr2, callback) {
  return callback(arr1, arr2)
}

console.log(mergeArr([1, 4, 7, 8], [1, 6, 8, 0], addition));
console.log(mergeArr([1, 4, 7, 8], [1, 6, 8, 0], subtraction));
console.log(mergeArr([1, 4, 7, 8], [1, 6, 8, 0], multiplication));
console.log(mergeArr([1, 4, 7, 8], [1, 6, 8, 0], division));


const categories = [
  {id: 'animals', parent: null},
  {id: 'mammals', parent: 'animals'},
  {id: 'dog', parent: 'mammals'},
  {id: 'cat', parent: 'mammals'},
  {id: 'foxhound', parent: 'dog'},
  {id: 'beagle', parent: 'dog'},
  {id: 'snowshoe', parent: 'cat'},
  {id: 'persian', parent: 'cat'}
]

function treeCategories(categories, parent) {
  let node = {};
  categories.filter(category => category.parent === parent)
            .forEach(category => {
              node[category.id] = treeCategories(categories, category.id);
            });
  return node;
}

console.log(
  JSON.stringify(treeCategories(categories, null), null, 2)
);