import React from 'react'

export const Mapdemo3 = () => {
    var users=[
    {id:1,age:23,name:"darsh"},
    {id:2,age:24,name:"harsh"},
    {id:3,age:25,name:"Shyam"},
  ];
  return (
    <div style={{textAlign:"center"}}>
    <h1>Map demo3</h1>
    <table className='table'>
        <thead>
           <th>ID</th>
           <th>Age</th>
           <th>Name</th>
        </thead>
        <tbody>
            {
                users.map((user)=>{
                   return <tr>
                        <td>{user.id}</td>
                        <td>{user.age}</td>
                        <td>{user.name}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </div>
  )
}
