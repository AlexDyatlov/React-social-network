import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  
  const activeMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  const styles = {
    status: {
      fontWeight: '700'
    },
    span:{
      fontWeight: '400'
    }
  }

  return (
    <div>
      {!editMode &&
        <div style={styles.status}>
         Status: <span style={styles.span} onDoubleClick={activeMode}>{props.status || "No status"}</span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks