import React, { useState } from 'react'

export const Inputdemo1 = () => {
    const[name,setName]=useState("")
    const[age,setage]=useState("")
    const[email,setEmail]=useState("")
    const[isSubbmitted,setisSubbmited]=useState(false)
    const namehandler=(event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    const agehandler=(event)=>{
        console.log(event.target.value)
        setage(event.target.value)
    }
    const emailhandler=(event)=>{
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const displayhandler=(event)=>{
        setisSubbmited(true)
    }
    return (
    <div style={{textAlign:"center"}}>
        <h1>Input demo1</h1>
        <div>
            <label>Name</label>
            <input type='text' onChange={(event)=>{namehandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>Age</label>
            <input type='text' onChange={(event)=>{agehandler(event)}}></input>
            {/* {age} */}
        </div>
        <div>
            <label>Email</label>
            <input type='text' onChange={(event)=>{emailhandler(event)}}></input>
            {/* {email} */}
        </div>
        <div>
            <button onClick={()=>{displayhandler()}}>Display</button>
        </div>
        {
            isSubbmitted==true && <div>
                    <h1>Output</h1>
                    <h3>{name}</h3>
                    <h3>{age}</h3>
                    <h3>{email}</h3>
                </div>
        }
    </div>
  )
}