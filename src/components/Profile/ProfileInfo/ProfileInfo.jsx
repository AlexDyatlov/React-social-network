import React from 'react'
import Preloader from '../../Preloader/Preloader'
import s from './ProfileInfo.module.scss'
import ProfileStatus from './ProfileStatus'

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
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo;

