import React from 'react'

export const UserList = (props) => {
  return (
    <div style={{color:"blue"}}>
        <h1>User list</h1>
        <h5>{props.data}</h5>
        <h5>{props.user.name}</h5>
        <h5>{props.user.age}</h5>
        <h5>{props.user.id}</h5>
    </div>
  )
}
