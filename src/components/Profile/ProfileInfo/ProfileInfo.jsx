import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.content}>
        <img src="https://theinpaint.com/images/example-1-2.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}>
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo;

