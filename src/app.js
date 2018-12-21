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

export const getPosts=()=>{
  http.get('http://localhost:3000/posts')
  .then(data=>{
    ui.renderPosts(data);
  })
  .catch(error=>console.log(error));
};
document.addEventListener('DOMContentLoaded', getPosts);

const addPost=()=>{
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  if(title==='' || body===''){
    ui.showAlert('Fill all line', 'alert alert-danger');
  }else{
    const lastData = document.querySelectorAll('.forPost>.col>.card');
    if(lastData.length===0){
      const data = {id:1,title:title,body:body};
      http.post('http://127.0.0.1:3000/posts', data);
    }else{
      const lastDataId=lastData[lastData.length-1].classList;
      const data = {id:parseInt(lastDataId[2].charAt(2))+1,title:title,body:body};
      http.post('http://127.0.0.1:3000/posts', data);
    }
    getPosts();
  }
};
document.querySelector('.subm').addEventListener('click',addPost);
