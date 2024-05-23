// const base_url = 'http://localhost:3000/';

// const getPosts = () => {
//     fetch(base_url + 'posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
// }


// const savePost = () => {
//     const data = {
//         title: 'JavaScript',
//         views: 295
//     }

//     const options = {
//         method: 'post',
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)

//     }

//     fetch(base_url + 'posts', options)
//     .then(response => console.log(response))
// }

// const updatePost = () => {
//     const url = base_url + 'posts/' + '2';

   
//     const data = {
//         title: 'update post 2',
//         views: 70000
//     }

//     const options ={
//         method:'put',
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)
//     }

//     fetch(url, options)
//     .then(response => console.log(response))
// }

// const deletePost = () => {
//     const url = base_url + 'posts/' + '6892';
    
//     const options = {
//         method:'delete'
//     }

//     fetch(url, options)
//     .then(response => console.log(response))
// }

// deletePost();



const base_url = 'http://localhost:3000/';

const getPosts = async () => {
    const response = await fetch(base_url + 'posts');
    const data = await response.json();

    const tableBody = document.getElementById('table-body');
    data.forEach(post => {
        tableBody.innerHTML += `<tr><td>${post.id}</td><td>${post.title}</td><td>${post.views}</td></tr>`;
    });
}

getPosts();

/*
-------------данные с сервера json вывести на таблицу------------
использовать textContent, innerHtml, outerHtml
*/