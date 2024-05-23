/////SLICE////////копирование
/*
const users = ['Ulan', 'Maks', 'Essen', 'Ayana'];
const new_users = users.slice(1, 3);

// users[0] = 'Nikitos';

console.log('users: ', users);
console.log('new_users: ', new_users);
*/


////SPLICE////удаление
/*
const countries = ['Kyrg', 'USA', 'China', 'rUSSIA'];
countries.splice(0, 0, 'KAZAKHSTAN');

console.log(countries);
*/

//index indexof findindex


//ТАЙМЕР
//SetTimeOut
/*
const showMassage = (msg,msg2) => {
    console.log(msg + msg2);
}

const timewId = setTimeout(showMassage, 5000, 'Privet', 'salut');
clearTimeout(timewId); otmena
*/


//SetInterval

const showTime = () => {
    console.log(new Date().toTimeString());
}

const times = setInterval(showTime, 1000);
clearInterval(times, 5000);