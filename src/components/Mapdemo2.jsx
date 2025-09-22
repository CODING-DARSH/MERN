import React from 'react'

export const Mapdemo2 = () => {
      var users=[
    {id:1,age:23,name:"darsh"},
    {id:2,age:24,name:"harsh"},
    {id:3,age:25,name:"Shyam"},
  ]
  return (
    <div>
        <h1>
            Mapdemo2
        </h1>
        {
            users.map((user)=>{
                return <h1>{user.id}--{user.age}--{user.name}   </h1>
            })
        }
    </div>
  )
}
