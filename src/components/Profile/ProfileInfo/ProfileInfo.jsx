import React, { useState } from 'react'
import Preloader from '../../Preloader/Preloader'
import s from './ProfileInfo.module.scss'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData)
    .then(() => {
      setEditMode(false)
    })
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.small || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        {editMode 
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div className={s.aboutMe}>
    {isOwner && <button onClick={goToEditMode}>Edit</button>}
    <div>
      <span>Full name:</span> {profile.fullName}
    </div>
    <div>
      <span>Looking for a job:</span> {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    { profile.lookingForAJob && 
    <div>
      <span>My professional skills:</span> {profile.lookingForAJobDescription}
    </div>
    }
    <div>
      <span>About me:</span> {profile.aboutMe}
    </div>
    <div>
      <span>Contacts:</span> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;

