import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map( d => <DialogItem key={d.id} key={d.name} id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map( m => <Message key={m.message} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;