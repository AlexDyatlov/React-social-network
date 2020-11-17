import s from './Post.module.scss'

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://www.flaticon.com/svg/static/icons/svg/3695/3695744.svg" alt="" />
      {props.message}    
      <span>like {props.likeCount}</span> 
    </div>  
  )
}

export default Post;