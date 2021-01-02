import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.scss'
import Post from './Post/Post'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newPostText'} placeholder={'Сообщение'}
        validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Добавить пост</button>
      </div>
    </form>
  )
}

const AddMyPostsRedux = reduxForm ({
  form: 'ProfileAddNewPostForm'
}) (AddNewPostForm)


const MyPosts = React.memo(props => {

  let postsElements = 
      [...props.posts]
      .reverse()
      .map( p => <Post key={p.message} message={p.message} likeCount={p.likesCount}/>)

  let newPostElement = React.createRef() // Создаем пустую ссылку 

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }
  
  return (
    <div className={s.postBlock}>
        <h3>Мои посты</h3>
         <AddMyPostsRedux onSubmit={onAddPost} />
        <div className={s.post}>
          {postsElements}
        </div>
    </div>
  )
})

export default MyPosts;




