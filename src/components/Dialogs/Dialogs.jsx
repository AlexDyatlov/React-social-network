import s from './Dialog.module.scss'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {

    const path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    )

}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id='1' name='Дима'/>
                <DialogItem id='2' name='Андрей'/>
                <DialogItem id='3' name='Света'/>
                <DialogItem id='4' name='Саша'/>
                <DialogItem id='5' name='Виктор'/>
                <DialogItem id='6' name='Валера'/>
            </div>
            <div className={s.messages}>
                <Message message='Привет'/>     
                <Message message='Какой твой любимый ЯП?'/>     
                <Message message='Как тебя зовут?'/>     
            </div>
        </div>
    )
}

export default Dialogs;