import React from 'react'
import { StudentList } from './StudentList'

export const Student = () => {
    var students=[
    {
        id:1,
        clg:"DHOLAKPUR",
        name:"Bheem",
        branch:"aiml",
        age:10
    },
    {
        id:2,
        clg:"Hogwarts",
        name:"Harry",
        branch:"Cse",
        age:12
    },
    {
        id:3,
        clg:"Tokyo",
        name:"Doremon",
        branch:"ECE",
        age:13
    },
]
  const info =(id)=>{
    alert("Id -->"+id)
  }
  return (
    <div>
        <StudentList students={students} info={info}></StudentList>
    </div>
  )
}
