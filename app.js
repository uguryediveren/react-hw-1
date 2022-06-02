import axios from 'axios';

export default async function getData(id) {
    var user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.data)
    var userPost = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`).then(res => res.data)

    console.log(user);
    console.log(userPost);
}


