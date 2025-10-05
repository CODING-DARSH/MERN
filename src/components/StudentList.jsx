import React from 'react'

export const StudentList = (props) => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Student List</h1>
        <table className='table' border={2}>
            <thead>
                <th>ID</th>
                <th>CLG</th>
                <th>NAME</th>
                <th>BRANCH</th>
                <th>AGE</th>
                <th>INFO</th>
            </thead>
            <tbody>
                {
                    props.students.map((student)=>{
                        return(
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.clg}</td>
                                <td>{student.name}</td>
                                <td>{student.branch}</td>
                                <td>{student.age}</td>
                                 <button onClick={() => props.info(student.id)}>Info</button>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
