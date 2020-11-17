import classes from './Navbar.module.scss'

const classesActive = `${classes.item} ${classes.active}`

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <a href="#">Профиль</a>
        </li>
        <li className={classes.item}>
          <a className={classesActive} href="#">Сообщения</a>
        </li>
        <li className={classes.item}>
          <a href="#">Новости</a>
        </li>
        <li className={classes.item}>
          <a href="#">Музыка</a>
        </li>
        <li className={classes.item}>
          <a href="#">Настройки</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;