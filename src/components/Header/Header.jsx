import React from 'react'
import s from './Header.module.scss'
import logoImg from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
return (
  <header className={s.header}>
    <img src={logoImg} className={s.logoImg} />
    <div className={s.loginBlock}>
      {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Выйти</button></div>
        : <NavLink to={'/login'}>Login</NavLink> }
    </div>
  </header>
  )
}

export default Header;