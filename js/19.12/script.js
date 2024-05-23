/////////FILTER/////////
/*
const arr = [10, 20, 30, 60, 45, 90];

const new_arr = arr.filter(
    function(item){
        return item > 50;
    }
)

console.log(new_arr);



const users = [
    {name: 'Ulan', age: 18},
    {name: 'Maks', age: 17},
    {name: 'Ulansa', age: 95}
];

const filterUsers = users.filter(
    function(item){
        return item.age < 18;
    }
)
console.log(filterUsers);
///стрелочная фу ия
const users2 = [
    {name: 'Ulan', age: 18},
    {name: 'Maks', age: 17},
    {name: 'Ulansa', age: 95}
];

const filterUsers2 = users.filter(item => item.age < 18) 

console.log(filterUsers2);
*/


/////REDUCE//////

// const result = myArray.reduce(func, initialValue);

// const prices = [100, 95, 50];

// const result = prices.reduce((sum, item) => sum + item, 0);

// console.log(result);


/*
func (sum, item) => sum + item
initialValue = 0

1)(sum=0, item=100) => 0 + 100

return = 100

2)(sum, item) =>  100 + 95

return = 195
*/


// const numbers = [-5, 6, -2, 10];

// const result = numbers.reduce((sum, elem) => {
//     if(elem > 0){
//         return sum + elem;
//     }
//     return sum;
// },0)

// console.log(result);

////////forEach//////////
const users = [
    {name: 'Ulan', age: 18},
    {name: 'Maks', age: 17},
    {name: 'Ulansa', age: 95}
];

users.forEach(item => console.log(item))

const prices = [100, 95, 50];
prices.forEach((sum, item) => sum + item, 0);
console.log(prices);