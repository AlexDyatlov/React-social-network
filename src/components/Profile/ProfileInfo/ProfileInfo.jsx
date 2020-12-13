import React from 'react'
import Preloader from '../../Preloader/Preloader'
import s from './ProfileInfo.module.scss'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.content}>
        <img src='https://theinpaint.com/images/example-1-2.jpg' alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.small} />
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo;

