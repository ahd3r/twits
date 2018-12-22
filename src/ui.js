import { createEvent } from './app';

const event = createEvent();

class UI{
  bigError(){
    while(document.querySelector('body').firstChild){
      document.querySelector('body').firstChild.remove();
    }
    document.querySelector('body').appendChild(document.createElement('div')).className='container';
    document.querySelector('.container').appendChild(document.createElement('div')).className='row';
    document.querySelector('.row').appendChild(document.createElement('div')).className='col text-center';
    document.querySelector('.text-center').appendChild(document.createElement('h1')).textContent='Sorry, but our site is not working now';
  }
  clearPlace(){
    while(document.querySelector('.forPost>.col').firstChild){
      document.querySelector('.forPost>.col').firstChild.remove();
    }
  }
  clearInput(){
    document.querySelector('#title').value='';
    document.querySelector('#body').value='';
    document.querySelector('#id').value='';
  }
  formAdd(){
    while(document.querySelector('.card-form>.container-fluid>.mb-3').firstChild){
      document.querySelector('.card-form>.container-fluid>.mb-3').firstChild.remove();
    }
    document.querySelector('.card-form>.container-fluid>.mb-3').appendChild(document.createElement('div')).className='col';
    document.querySelector('.card-form>.container-fluid>.mb-3').appendChild(document.createElement('div')).className='col-3';
    document.querySelector('.card-form>.container-fluid>.mb-3>.col-3').appendChild(document.createElement('button')).className='btn form-control btn-primary subm';
    document.querySelector('.subm').textContent='Post';
  }
  formEdit(id,title,body){
    while(document.querySelector('.card-form>.container-fluid>.mb-3').firstChild){
      document.querySelector('.card-form>.container-fluid>.mb-3').firstChild.remove();
    }
    document.querySelector('#title').value=title;
    document.querySelector('#body').value=body;
    document.querySelector('.card-form>.container-fluid>.mb-3').appendChild(document.createElement('div')).className='col col-3 back';
    document.querySelector('.card-form>.container-fluid>.mb-3>.back').appendChild(document.createElement('button')).className='btn form-control backBtn';
    document.querySelector('.backBtn').textContent='Back';
    document.querySelector('.backBtn').addEventListener('click',function(){
      event.backEvent();
    });
    document.querySelector('.card-form>.container-fluid>.mb-3').appendChild(document.createElement('div')).className='col';
    document.querySelector('.card-form>.container-fluid>.mb-3').appendChild(document.createElement('div')).className='col col-3 updt';
    document.querySelector('.card-form>.container-fluid>.mb-3>.updt').appendChild(document.createElement('button')).className='btn btn-primary form-control updtBtn';
    document.querySelector('.updtBtn').textContent='Update';
    document.querySelector('#id').setAttribute('value', id);
    document.querySelector('.updtBtn').addEventListener('click',function(){
      event.updtEvent(document.querySelector('#id').value);
    });
  }
  showAlert(msg,classAlert){
    if(!document.querySelector('.forError')){
      const newElem = document.createElement('div');
      newElem.className='row forError mt-3 mb-3';
      newElem.appendChild(document.createElement('div')).className='col';
      document.querySelector('.postContainer>.stuff').insertBefore(newElem,document.querySelector('.forPost'));
      document.querySelector('.forError>.col').appendChild(document.createElement('div')).className=classAlert;
      const error = document.querySelector('.forError>.col>div');
      error.setAttribute('role', 'alert');
      error.textContent=msg;
      setTimeout(function(){
        document.querySelector('.forError').remove();
      },3000);
    }
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
        document.querySelector(`.id${post.id}>.forBtn>.placeForEditBtn>a`).addEventListener('click',event.editItemEvent);
        document.querySelector(`.id${post.id}>.forBtn>.placeForEditBtn>a`).appendChild(document.createElement('i')).className='fa fa-edit';
        forDel.appendChild(document.createElement('a')).className='deleteItemBtn';
        document.querySelector(`.id${post.id}>.forBtn>.placeForDelBtn>a`).setAttribute('href','#!');
        document.querySelector(`.id${post.id}>.forBtn>.placeForDelBtn>a`).addEventListener('click',event.deleteItemEvent);
        document.querySelector(`.id${post.id}>.forBtn>.placeForDelBtn>a`).appendChild(document.createElement('i')).className='fa fa-close';
      });
    } else {
      document.querySelector('.forPost>.col').appendChild(document.createElement('h4')).className='text-center';
      document.querySelector('.forPost>.col>h4').textContent='Don\'t have any posts';
    }
  }
  // paginate(pageAmount){
  //   if(document.querySelector('.pagination')){
  //     document.querySelector('.pagination').parentElement.remove();
  //   }
  //   document.insertBefore(document.createElement('nav'),document.querySelector('script')).appendChild(document.createElement('ul')).className='pagination';
  //   document.querySelector('.pagination').appendChild(document.createElement('li')).className='page-item';
  //   document.querySelector('.pagination').appendChild(document.createElement('li')).className='page-item';
  // }
}

export const ui = new UI;
