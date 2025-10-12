import React from 'react'
import { UserList } from './UserList'
import { MyButton } from '../common/MyButton'

export const Users = () => {
  var data="User Data"
  var user={
    id:100,
    name:"Darsh",
    age:23
  }

    return (
    <div style={{textAlign:"center"}}>
      <MyButton name='usertest' className=''></MyButton>
        <UserList data={data} user={user}></UserList>
    </div>
  )
}
