const form = document.querySelector('#my-form');

//находим каждое поле через селектор
/*
form.addEventListener('submit', () => {
    const email = document.querySelector('[name="email"]').value;
    const password = document.querySelector('[name="password"]').value;
    const country = document.querySelector('[name="countries"]').value;
    const langs = document.querySelectorAll('[type="checkbox"]:checked');
    const gender = document.querySelector('[name="gender"]:checked').value;
    const langs_value = [];

    langs.forEach(item => langs_value.push(item.value));
    
    const user_data = {
        email,
        password,
        country,
        gender,
        langs:langs_value
    }

    console.log(user_data);
})
*/

//находим все поля одним селектором
/*
form.addEventListener('submit', () => {
    const fields = document.querySelectorAll('select, textarea, input:not([name="lang"])');
    const values = {};

    fields.forEach(field => {
        values[field.name] = field.value;
    })

    values.langs = getCheckboxValues(document.querySelectorAll('[name="lang"]:checked'))

    console.log('values', values);
})
*/

//получаем из HTML элемента формы по ключам name
/*
form.addEventListener('submit', () => {
    const {email, password, countries, lang, gender} = form;
    
    const values = {
        pochta: email.value,
        parol: password.value,
        shaar: countries.value,
        til: getCheckboxValues(lang),
        pol: gender.value
    }

    console.log(values);
})
*/

//получаем из свойства elements формы 
/*
form.addEventListener('submit', () => {
    const elements = form.elements;
    
    const values = {};
    for(let i = 0; i < elements.length; i++){
        const formElement = elements[i];
        const name = formElement.name;
        
        if(name){
            const value = formElement.value;
            values[name] = value;
        }
    }

    console.log(values);
})
*/

//получаем через конструктор formData
/*
form.addEventListener('submit', () => {
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData.entries()));
})
*/


//получаем через цикл for..of
/*
form.addEventListener('submit', () => {
    const values = {};


    for(let field of form){
        console.log(field);
    }
})


function getCheckboxValues(domElems){
    const langs_value = [];
    domElems.forEach(item => langs_value.push(item.value));
    return langs_value;
}
*/

/*
// form.addEventListener('submit', () => {

//     const {email, password, countries} = form;

// if (checkField(email) && checkField(password) && checkField(countries)){
//   const values = {
//         email: email.value,
//         password: password.value,
//         countries: countries.value
//     }
// console.log(values);
// }
//     const json_string = JSON.stringify(values); //преобразует в JSON
//     const js_object = JSON.parse(json_string); //возвращает в массив

//     console.log(js_object);
// })



// function checkField(elem){
//     if(elem.value  === ''){
//         elem.style.border = '1px solid red';
//         return false;
//     }

//     return true;
// }

//

//





// получаем из свойства elements формы

*/









/*//Получаем через конструктор from DATA
form.addEventListener('submit', () => {
    const formData = new formData(form);
    console.log(Object.fromEntries(formData.entries()));
    
})
*/


//Получаем через for .. of
form.addEventListener('submit', () => {
    const values = {}
        for(let field of form){
            console.log(field);
        }
    
})


function getCheckboxValues(domElems){
    const langs_value = [];
    domElems.forEach(item => langs_value.push(item.value));
    return langs_value;
}



































// const data = {
//     name: 'Esen',
//     age: 12
// }
// const {name, age} = data;
// console.log(name);
// console.log(age);