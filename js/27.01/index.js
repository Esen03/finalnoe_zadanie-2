const showData = (arr) => {
    arr.forEach(element => {
        console.log(element.title);
    });
}

const getPosts = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data => showData(data))
}

getPosts();


const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => users.forEach(user => console.log(user.name, user.email)));
}

getUsers();