import React from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = 
      props.posts.map( p => <Post key={p.message} message={p.message} likeCount={p.likesCount}/>)

  let newPostElement = React.createRef() // Создаем пустую ссылку 

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  
  return (
    <div className={s.postBlock}>
        <h3>Мои посты</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
          </div>
          <div>
            <button onClick={onAddPost}>Добавить пост</button>
          </div>
          <div>
            <button>Удалить пост</button>
          </div>
        </div>
        <div className={s.post}>
          {postsElements}
        </div>
    </div>
  )
}

export default MyPosts;




