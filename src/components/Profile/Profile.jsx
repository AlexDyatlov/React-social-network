import s from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://theinpaint.com/images/example-1-2.jpg" alt="" />
      </div>
      <div>
        ava + desc
      </div>
      <MyPosts hey='yo'/>
    </div>
  )
}

export default Profile;

