import React from 'react'
import s from './Users.module.scss'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={s.userItem}>
      <div>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small || userPhoto} className={s.usersPhoto} />
          </NavLink>
        </div>
        <div className={s.userItem__name}>{user.name}</div>
        <div className={s.userItem__status}>{user.status}</div>
        <div>
          {user.followed
            ? <button className={s.userBtn + ' ' + s.userBtnUnfollow} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unfollow(user.id)
            }}>Unfollow</button>
            : <button className={s.userBtn} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              follow(user.id)
            }} >Follow</button>}
        </div>
      </div>
    </div>
  )
}

export default User