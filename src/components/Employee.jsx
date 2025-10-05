import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employee = () => {
    var users=[
    {
        id:100,
        name:"Darsh",
        age:18,
    },
    {
        id:101,
        name:"Ram",
        age:19,
    },
    {
        id:102,
        name:"Shyam",
        age:20,
    }
]
    return (
    <div style={{textAlign:"center"}}>
        <EmployeeList users={users}></EmployeeList>
    </div>
  )
}
