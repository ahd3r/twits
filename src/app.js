// const greeting = 'Hello World';
// console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   return result;
// };

// getData('https://jsonplaceholder.typicode.com/posts').then(data=>console.log(data)).catch(err=>console.log(err));

// const getStuffFromOtherFile = require('./module');
// console.log(getStuffFromOtherFile);

// import * as dataFromOtherFile from './module';

// console.log(dataFromOtherFile.shit);
// console.log(dataFromOtherFile.persone('Peyton', 'Female'));

import { http } from './http';
import { ui } from './ui';

const getPosts=()=>{
  http.get('http://localhost:3000/posts')
  .then(data=>{
    ui.renderPosts(data);
  })
  .catch(error=>console.log(error));
};
document.addEventListener('DOMContentLoaded', getPosts);
