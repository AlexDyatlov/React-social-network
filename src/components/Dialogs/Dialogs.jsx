import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
             <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Введите ваше сообщение'} />
            </div>
             <div>
                <button>Отправить сообщение</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm ({
    form: 'dialogAddMessageFormRedux'
}) (AddMessageForm)

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements = state.dialogs.map( d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map( m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
              <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;