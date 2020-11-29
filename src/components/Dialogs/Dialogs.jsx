import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogElements = state.dialogs.map( d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map( m => <Message key={m.message} message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }    

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
              <div>{messagesElements}</div>
              <div>
                <div><textarea value={newMessageBody} 
                                onChange={onNewMessageChange} 
                                placeholder='Введите ваше сообщение'></textarea></div>
                <div><button onClick={onSendMessageClick}>Отправить сообщение</button></div>
              </div>
            </div>
        </div>
    )
}

export default Dialogs;