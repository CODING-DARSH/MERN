import React, { useState } from 'react'

export const Inputdemo2 = () => {
  const[name,setName]=useState("")
  const[colour,setColor]=useState("")
  const[submitted,setSubmitted]=useState(false)
  const submittedhandler=()=>{
    setSubmitted(true)
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>Innput demo2</h1>
      <div>
        <label>Name</label>
        <input type="text" onChange={(event)=>{setName(event.target.value)}}/>
      </div>
      <div>
        <label>Color</label>
        <input type='color' onChange={(event)=>{setColor(event.target.value)}}></input>
      </div>
      <div>
        <button onClick={()=>{submittedhandler()}}>Submit</button>
      </div>
      {
        submitted &&<div style={{color:colour}}>
          <h1>{name}</h1>
          
          </div>
      }
    </div>
  )
}
