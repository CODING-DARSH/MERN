import React, { useState } from 'react'

export const Statedemo2 = () => {
    const[loading,setLoading]=useState(true)
    const stoploader=()=>{
        setLoading(false)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Statedemo2</h1>
        {
          loading==true && <h1>loading....</h1>
        }
        <button onClick={()=>{stoploader()}}>stoploader</button>
    </div>
  )
}
