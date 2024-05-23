const base_url = 'http://localhost:3000/';
const posts_url = base_url + 'posts';
const comments_url = base_url + 'comments';
const profile_url = base_url + 'profile';

const getData = url => {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
}

const createData = (url, data) => {
    const option = {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }

    fetch(url, option)
    .then(response => console.log(response))
}

const newPost = { id: "2", title: "javasript", views: 550 }

createData(posts_url, newPost);

getData(posts_url);
getData(comments_url);
getData(profile_url);


/*
CRUD

C -create
R - read
U - update
D - delete
*/