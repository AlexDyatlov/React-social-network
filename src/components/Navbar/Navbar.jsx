import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss'
import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>Новости</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/music" activeClassName={s.activeLink}>Музыка</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/settings" activeClassName={s.activeLink}>Настройки</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/friends" activeClassName={s.activeLink}>Друзья</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;