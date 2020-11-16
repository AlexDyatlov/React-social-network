import s from './Profile.module.scss'
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://theinpaint.com/images/example-1-2.jpg" alt="" />
      </div>
      <div>
        ava + desc
      </div>
      <div className={s.box}>
        my posts
        <div>
          New post
        </div>
        <div className={s.post}>
          <div className={s.item}>
            post 1
          </div>
          <div className={s.item}>
            post 1
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;