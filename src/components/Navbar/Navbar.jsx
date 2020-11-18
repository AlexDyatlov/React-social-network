import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss'
import s from './Navbar.module.scss'

// const classesActive = `${classes.item} ${classes.active}`

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
      </ul>
    </nav>
  )
}

export default Navbar;