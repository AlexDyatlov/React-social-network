import classes from './Navbar.module.scss'

const classesActive = `${classes.item} ${classes.active}`

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}>
          <a href="#">Profile</a>
        </li>
        <li className={classes.item}>
          <a className={classesActive} href="#">Message</a>
        </li>
        <li className={classes.item}>
          <a href="#">News</a>
        </li>
        <li className={classes.item}>
          <a href="#">Music</a>
        </li>
        <li className={classes.item}>
          <a href="#">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;