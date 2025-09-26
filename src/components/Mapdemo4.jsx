import React from 'react'

export const Mapdemo4 = () => {
  var employees=[
    {
      id:1,
      name:"ram",
      age:26,
      salary:25000,
      city:"ahemdabad",
      gender:"male",
    }, 
    {
      id:2,
      name:"Shyam",
      age:16,
      salary:15000,
      city:"ahemdabad",
      gender:"male",
    },
    {
      id:3,
      name:"Seeta",
      age:27,
      salary:23000,
      city:"Gandhinagar",
      gender:"female",
    },
  ];
  return (
    <div style={{textAlign:"center"}}>
         <h1>MAP DEMO 4</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>SALARY</th>
            <th>CITY</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr style={{backgroundColor:emp.gender == "female" && "pink"}}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td style={{color:emp.age<25 ? "red":"black"}}>{emp.age}</td>
                {/* <td style={{backgroundColor:emp.salary>35000 ? "lightblue":"white"}}>{emp.salary}</td> */}
                <td style={{backgroundColor:emp.salary>35000 && "lightblue"}}>{emp.salary}</td>
                <td style={{backgroundColor:emp.city=="mumbai" && "gold"}}>{emp.city}</td>
                <td>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
