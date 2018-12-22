import { http } from './http';
import { ui } from './ui';

const getPosts=()=>{
  http.get('http://localhost:3000/posts')
  .then(data=>{
    ui.clearPlace();
    ui.renderPosts(data);
  })
  .catch(()=>{
    ui.bigError();
  });
};
document.addEventListener('DOMContentLoaded', getPosts);

const addPost=async ()=>{
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  if(title==='' || body===''){
    ui.showAlert('Fill all line', 'alert alert-danger');
  }else{
    const data = {title:title,body:body};
    await http.post('http://127.0.0.1:3000/posts', JSON.stringify(data));
    ui.clearInput();
    getPosts();
  }
};
document.querySelector('.subm').addEventListener('click',addPost);

export function createEvent(){
  return {
    deleteItemEvent: async function(e){
      const classes = e.target.parentElement.parentElement.parentElement.parentElement.classList;
      const id = parseInt(classes[2].charAt(2));
      await http.delete(`http://localhost:3000/posts/${id}`);
      ui.showAlert('Deleted', 'alert alert-success');
      getPosts();
    },
    editItemEvent: function(e){
      const classes = e.target.parentElement.parentElement.parentElement.parentElement.classList;
      const id = parseInt(classes[2].charAt(2));
      const title = e.target.parentElement.parentElement.parentElement.previousSibling.previousSibling.textContent;
      const body = e.target.parentElement.parentElement.parentElement.previousSibling.textContent;
      ui.formEdit(id,title,body);
    },
    updtEvent: async function(id){
      const title=document.querySelector('#title').value;
      const body=document.querySelector('#body').value;
      if(title!=='' && body!==''){
        const data = {title:title,body:body};
        await http.put(`http://localhost:3000/posts/${id}`, JSON.stringify(data));
        getPosts();
        ui.clearInput();
        ui.formAdd();
        ui.showAlert('Edited', 'alert alert-success');
        document.querySelector('.subm').addEventListener('click',addPost);
      } else {
        ui.showAlert('Fill all line', 'alert alert-danger');
      }
    },
    backEvent:function(){
      ui.clearInput();
      ui.formAdd();
      document.querySelector('.subm').addEventListener('click',addPost);
    }
  };
}
