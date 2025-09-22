import React from 'react'

export const Mapdemo1 = () => {
    var users=["ram","shyam","ankit"]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map demo1</h1>
        {
            users.map((user)=>{
                return <h1>{user}</h1>
            })
        }
    </div>
  )
}
