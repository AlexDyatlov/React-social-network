import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormsControls'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import s from '../Dialogs.module.scss'

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
           <div>
              <Field component={Textarea}
              validate={[required, maxLength100]}
              name={'newMessageBody'}
              placeholder={'Введите ваше сообщение'} />
          </div>
          <div>
            <button className={s.addMessage}>Отправить сообщение</button>
          </div>
      </form>
  )
}

export default reduxForm ({form: 'dialogAddMessageFormRedux'}) (AddMessageForm)