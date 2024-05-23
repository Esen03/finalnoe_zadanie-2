////////МАССИВЫ-----------------

/*
const users = [];
console.log(typeof users);//Array.isArray(users)
*/

//одномерный массив-----

/*
const countries = ['Kyrgyzstan', 'Canada', 'Portugal', 'USA'];
console.log(countries[1]);
*/

/*
const elements = [15, {name: 'Maks', age: 29}, 'hello maks', false, null];
const user = elements[1];
console.log(user.name);
*/


//многомерный массив-------

/*
const numbers = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
]

console.log(numbers[3][2]);
*/

//Методы массива --- pop
/*
const countries = ['Kyrg', 'USA', 'Kazakh', 'Canasa'];
const deleteElem = countries.pop();
console.log(countries);
console.log(deleteElem);
*/

//push добавляет в конец
/*
const countries = ['Kyrg', 'USA', 'Kazakh', 'Canasa'];
countries.push('Germany', 'Portugal', 'CANADA');
console.log(countries);
*/


//shift удаляет элемент
/*
const numbers = [45, 23, 34, 55];
const deleteElem = numbers.shift();
console.log(deleteElem);
*/

//unshift добавляет эл в начало
/*
const numbers = [45, 23, 34, 55];
numbers.unshift(10,11);
console.log(numbers);
*/

/*
const users = [
    {name: 'Maks', age: 29},
    {name: 'Abai', age: 19},
    {name: 'Diana', age: 22}
];
users[3] = {name: 'Essentai', age: 67};//замена и добавление
console.log(users.length);
*/


///////циклы ----
// const countries = ['Kyrg', 'USA', 'Kazakh', 'Canasa'];

// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[3]);
//   }



const countries = ['Kyrg', 'USA', 'Kazakh', 'Canasa'];
countries.shift('Germany', 'Franch');
console.log(countries);