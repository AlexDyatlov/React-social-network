import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import s from './MyPosts.module.scss'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = 
  props.posts.map( p => <Post key={p.message} message={p.message} likeCount={p.likesCount}/>)

  let newPostElement = React.createRef() // Создаем пустую ссылку 

  let addPost = () => {
    // props.addPost()
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text)
    // let action = ({ type: 'UPDATE-NEW-POST-TEXT', newText: text});
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action)
  }
  
  return (
    <div className={s.postBlock}>
        <h3>Мои посты</h3>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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




