// const input = Number(prompt('Input a number'));

// console.log(typeof input);

// if (input === 0) {
//   console.log(`True, ${input} === 0`)
// } else {
//   console.log(`False, ${input} !== 0`)
// }



// const hour = Number(prompt('Enter a number from 0 to 59'));

// if (hour < 15 ) {
//   console.log('I')
// } else if (hour >= 15 && hour <= 29) {
//   console.log('II')
// } else if (hour > 29 && hour <=44) {
//   console.log('III')
// } else if (hour > 44 && hour <=59) {
//   console.log('IV')
// }



// const a = Number(prompt('Enter a number'));
// const b = Number(prompt('Enter a second number'));

// if (a <= 1 && b >= 3) {
//   console.log('a + b =', a + b)
// } else {
//   console.log('a - b =', a - b)
// }



// const month = Number(prompt('Enter number of month'))

// if ((month >= 1 && month <= 2) || month === 12) {
//   console.log(month, 'Winter')
// } else if (month > 2 && month <= 5) {
//   console.log(month, 'Spring')
// } else if (month > 5 && month <= 8) {
//   console.log(month, 'Summer')
// } else if (month > 8 && month <= 11) {
//   console.log(month, 'Autumn')
// }



// const a = Number(prompt('Enter a first number'))
// const b = Number(prompt('Enter a second number'))
// const c = Number(prompt('Enter a third number'))

// if (a < b && b < c) console.log(a, b, c)
// if (a < c && c < b) console.log(a, c, b)
// if (b < c && c < a) console.log(b, c, a)
// if (b < a && a < c) console.log(b, a, c)
// if (c < b && b < a) console.log(c, b, a)
// if (c < a && a < b) console.log(c, a, b)



// const num = prompt('Enter a number');
// const reverseNum = num.split('').reverse().join('');
// console.log(num, reverseNum);


function reverseNum(num) {
  const a = num % 10;
  const b = Math.floor(num / 10) % 10;
  const c = Math.floor(num / 100);
  
  console.log(a * 100 + b * 10 + c)
}

reverseNum(432)
reverseNum(683)
reverseNum(409)



// const num = prompt('Enter number of a season')
// let result

// switch (num) {
//   case '1':
//     result = 'Winter'
//     console.log(result)
//     break;
//   case '2':
//     result = 'Spring'
//     console.log(result)
//     break;
//   case '3':
//     result = 'Summer'
//     console.log(result)
//     break;
//   case '4':
//     result = 'Autumn'
//     console.log(result)
//     break;
// }



// const color = prompt('Enter a color')

// switch (color) {
//   case 'green': console.log('Go!')
//   break;
//   case 'red': console.log('Stop!')
//   break;
//   case 'yellow': console.log('Wait!')
//   break;
//   default: console.log('Do what you want')
// }