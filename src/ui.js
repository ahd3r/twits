import { http } from './http';
import { gp } from './app';

class UI{
  showAlert(msg,classAlert){
    document.querySelector('.forError>.col').appendChild(document.createElement('div')).className=classAlert;
    const error = document.querySelector('.forError>.col>div');
    error.setAttribute('role', 'alert');
    error.textContent=msg;
    setTimeout(function(){
      document.querySelector('.forError>.col>div').remove();
    },3000);
  }
  renderPosts(posts){
    if(posts.length!==0){
      posts.forEach(post=>{
        const forPostItem=document.querySelector('.forPost>.col');
        forPostItem.appendChild(document.createElement('div')).className=`card card-dody id${post.id} mb-2`;
        const forPostItem2=document.querySelector(`.forPost>.col>.id${post.id}`);
        forPostItem2.appendChild(document.createElement('h4'));
        const forPostItem3 = document.querySelector(`.forPost>.col>.id${post.id}>h4`);
        forPostItem3.className='card-title ml-3 mt-2';
        forPostItem3.textContent=post.title;
        forPostItem2.appendChild(document.createElement('p'));
        const forPostItem4 = document.querySelector(`.forPost>.col>.id${post.id}>p`);
        forPostItem4.className='card-body ml-3';
        forPostItem4.textContent=post.body;
        forPostItem2.appendChild(document.createElement('div')).className='forBtn row';
        document.querySelector(`.id${post.id}>.forBtn`).appendChild(document.createElement('div')).className='placeForEditBtn col-11 text-right';
        document.querySelector(`.id${post.id}>.forBtn`).appendChild(document.createElement('div')).className='placeForDelBtn col-1';
        const forEdit=document.querySelector(`.id${post.id}>.forBtn>.placeForEditBtn`);
        const forDel=document.querySelector(`.id${post.id}>.forBtn>.placeForDelBtn`);
        forEdit.appendChild(document.createElement('a')).className='editItemBtn';
        document.querySelector(`.id${post.id}>.forBtn>.placeForEditBtn>a`).setAttribute('href','#!');
        document.querySelector(`.id${post.id}>.forBtn>.placeForEditBtn>a`).addEventListener('click',function(){
          console.log('edit');
        });
        document.querySelector(`.id${post.id}>.forBtn>.placeForEditBtn>a`).appendChild(document.createElement('i')).className='fa fa-edit';
        forDel.appendChild(document.createElement('a')).className='deleteItemBtn';
        document.querySelector(`.id${post.id}>.forBtn>.placeForDelBtn>a`).setAttribute('href','#!');
        document.querySelector(`.id${post.id}>.forBtn>.placeForDelBtn>a`).addEventListener('click',function(e){
          const id=e.target.parentElement.parentElement.parentElement.parentElement.classList;
          http.delete(`http://localhost:3000/posts/${parseInt(id[2].charAt(2))}`);
          gp;
        });
        document.querySelector(`.id${post.id}>.forBtn>.placeForDelBtn>a`).appendChild(document.createElement('i')).className='fa fa-close';
      });
    } else {
      document.querySelector('.forPost>.col').appendChild(document.createElement('h4')).className='text-center';
      document.querySelector('.forPost>.col>h4').textContent='Don\'t have any posts';
    }
  }
}

export const ui = new UI;
