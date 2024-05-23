//&& сравнение
// const a = 10;
// const b = 'admin';
// const result = a > 10 && b === 'admin';
// console.log(result);

//1) false + true = false
//2) true + false = false
//3) true + true = true
/*
const c = 15;
const d = 10;
const result2 = c > 15 && d === 10;
console.log(result2);

const x = 'essentai';
const y = 200;
const result3 = x === 'essentai' && y > 200;
console.log(result3);

const e = 20;
const g = 5;
const result4 = e === 20 && g < e;
console.log(result4);
*/

//||
// const  x = 45;
// const isChecket = true;
// const result = x > 10 || isChecket === false;
// console.log(result);

/*
1) true + false = true
2) false + true = true
3) true + true = true
4) false + false = false
*/

/*
const user = {//object
    name: 'Test',
    age: 30,
    isProgrammer: true
}

const result1 = user.age === 18 || user.isProgrammer === false;
console.log(result1);
*/


// ! наоборот
/*
const result = !(5 > 5);
console.log(result);
*/


// &&=
/*
let price = 100;
let new_price = 65;

price &&= new_price;
console.log(price);
*/

// ||=
/*
let price = null;
price ||= 'уточнить цену у продавца';
console.log(price);
*/

// ??=
/*
let userName;

userName ??= 'not fined';
console.log(userName);
*/

// if
// const age = 19;

// if(age > 18){
//     alert('welcome');
// }

const user = 'essentai';
if(user === 'essentai'){
    alert('hello my nigga friend');
}