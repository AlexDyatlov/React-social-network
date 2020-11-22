import s from './MyPosts.module.scss'
import Post from './Post/Post'


const MyPosts = (props) => {

  let postsElements = 
  props.posts.map( p => <Post key={p.message} key={p.likesCount} message={p.message} likeCount={p.likesCount}/>)
  
  return (
    <div className={s.postBlock}>
        <h3>Мои посты</h3>
        <div>
          <textarea></textarea>
          <button>Добавить пост</button>
          <button>Удалить пост</button>
        </div>
        <div className={s.post}>
          {postsElements}
        </div>
    </div>
  )
}




export default MyPosts;




