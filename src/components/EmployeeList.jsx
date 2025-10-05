import React from 'react'

export const EmployeeList = (props) => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>EmployeeList</h1>
    <table className='table' border={2}>
        <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
        </thead>
        <tbody>
            {
                props.users.map((user)=>{
                    return(
                        <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                        </tr>
                    );
                })
            }
        </tbody>
    </table>
    </div>
  )
}
