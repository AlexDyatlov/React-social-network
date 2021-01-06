import React from 'react'
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls'
import { reduxForm } from 'redux-form'
import s from './ProfileInfo.module.scss'
import style from '../../common/FormsControls/FormsControls.module.scss'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
return <form onSubmit={handleSubmit} className={s.aboutMe}>
    <button>save</button>
    {error && <div className={style.formSummaryError}>{error}</div>}
    <div>
      <span>Full name:</span> {createField('Full name', 'fullName', [], Input)}
    </div>
    <div>
      <span>Looking for a job:</span> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
    </div>
    <div>
      <span>My professional skills:</span> {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
    </div>
    <div>
      <span>About me:</span> {createField('About me', 'aboutMe', [], Textarea)}
    </div>
    <div>
      <span>Contacts:</span> {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={s.contact}> 
        {key}: {createField(key, 'contacts.' + key, [], Input)}
        </div>
      })}
    </div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'}) (ProfileDataForm)

export default ProfileDataFormReduxForm