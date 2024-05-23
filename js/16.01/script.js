const form = document.querySelector('#my-form');

// const email = document.addEventListener('[name:"email"]').value;

//находим поля все поля одним селектором
// form.addEventListener('submit', () => {
//     const fields = document.querySelectorAll('select, textarea, input:not([name="lang"])');
// const values = {};

//     fields.forEach(fields => {
//         values[fields.name] = fields.value;
//     })
//     console.log(values);
// })




// function getCheckBoxValues(domElems){
//     console.log(domElems);

// }




//Получаем из HTML элемента формы по ключам наме

form.addEventListener('submit', () => {
    const {email, password, lang} = form;
    
    const values = {
        email:email.value,
        password:countries.value,
        lang:getChechBoxValues(lang)
    }
})