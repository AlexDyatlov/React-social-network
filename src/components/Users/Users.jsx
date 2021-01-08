import React from 'react'
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import s from './Users.module.scss'

let Users = ({ currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props }) => {

  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
        pageSize={pageSize} totalItemsCount={totalUsersCount} />
      <div className={s.userItems}>
        {users.map(u => <User user={u}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
          key={u.id}
        />)}
      </div>
    </div>
  )
}

export default Users