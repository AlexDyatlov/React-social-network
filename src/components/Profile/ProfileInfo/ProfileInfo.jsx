import React from 'react'
import Preloader from '../../Preloader/Preloader'
import s from './ProfileInfo.module.scss'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.content}>
        <img src='https://theinpaint.com/images/example-1-2.jpg' alt="" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.small} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo;

