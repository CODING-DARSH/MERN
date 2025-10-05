import React from 'react'
import { UserList } from './UserList'

export const Users = () => {
  var data="User Data"
  var user={
    id:100,
    name:"Darsh",
    age:23
  }

    return (
    <div style={{textAlign:"center"}}>
        <UserList data={data} user={user}></UserList>
    </div>
  )
}
