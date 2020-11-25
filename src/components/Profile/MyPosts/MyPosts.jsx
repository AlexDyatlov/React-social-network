import React from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post'


const MyPosts = (props) => {

  let postsElements = 
  props.posts.map( p => <Post key={p.message} message={p.message} likeCount={p.likesCount}/>)

  let newPostElement = React.createRef() // Создаем пустую ссылку 

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  
  return (
    <div className={s.postBlock}>
        <h3>Мои посты</h3>
        <div>
          <textarea ref={newPostElement}></textarea>
          <button onClick={addPost}>Добавить пост</button>
          <button>Удалить пост</button>
        </div>
        <div className={s.post}>
          {postsElements}
        </div>
    </div>
  )
}




export default MyPosts;




