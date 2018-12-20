class UI{
  // constructor(){

  // }
  // showAlert(msg,classAlert){

  // }
  renderPosts(posts){
    if(posts){
      posts.forEach(post=>{
        document.querySelector('.forPost>.col').appendChild(document.createElement('div')).className=`card card-dody id${post.id} mb-2 text-center`;
        document.querySelector(`.forPost>.col>.id${post.id}`).appendChild(document.createElement('p')).textContent=post.body;
      });
    } else {
      document.querySelector('.forPost>.col').appendChild(document.createElement('h4')).className='text-center';
      document.querySelector('.forPost>.col>h4').textContent='Don\'t have any posts';
    }
  }
}

export const ui = new UI;
