const form = document.querySelector('#my-form');

// const email = document.addEventListener('[name:"email"]').value;

//находим поля все поля одним селектором
form.addEventListener('submit', () => {
    const fields = document.querySelectorAll('input, select, textarea');
    const values = {};

    fields.forEach(fields => {
        values[fields.name] = fields.value
    })
    console.log(values);
})