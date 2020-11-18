import s from './MyPosts.module.scss'
import Post from './Post/Post'


const MyPosts = () => {

  return (
    <div className={s.postBlock}>
        <h3>Мои посты</h3>
        <div>
          <textarea></textarea>
          <button>Добавить пост</button>
          <button>Удалить пост</button>
        </div>
        <div className={s.post}>
          <Post message='Hi, how are you?' likeCount='12'/>
          <Post message="It's my first post." likeCount='18'/>
        </div>
    </div>

   
  )
}

export default MyPosts;




