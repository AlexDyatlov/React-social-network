import React from 'react'
import s from './Users.module.scss'

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers( [
      {id: 1, photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg', followed: 'false', fullName: 'Dmitry', status: 'This is new Text', location: {city: 'Minsk', country: 'Belarus'} },
      {id: 2, photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg', followed: 'true', fullName: 'Andrew', status: 'This is new Text 2', location: {city: 'Moscow', country: 'Russia'} },
      {id: 3, photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/3048/3048189.svg', followed: 'false', fullName: 'Alexandr', status: 'This is new Text 3', location: {city: 'Kiev', country: 'Ukraine'} },
      {id: 4, photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/3048/3048163.svg', followed: 'true', fullName: 'Lena', status: 'This is new Text 4', location: {city: 'Moscow', country: 'Russia'} },
    ])
  }

  return (
    <div> 
      {
        props.users.map(u => <div key={u.id}> 
          <div>
            <div>
              <img src={u.photoUrl} className={s.usersPhoto}/>
            </div>
            <div>
              {u.followed 
                ? <button onClick={() => {props.unfollow(u.id)} } >Unfollow</button> 
                : <button onClick={() => {props.follow(u.id)} } >Follow</button> }
            </div>
          </div>
          <div>
            <div>
               <div>{u.fullName}</div>
               <div>{u.status}</div>
            </div>
            <div>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </div>
          </div>

          </div>)
      }
  </div>
  )
}

export default Users;