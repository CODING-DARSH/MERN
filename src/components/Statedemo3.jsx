import React, { useState } from 'react'

export const Statedemo3 = () => {
  var randomnum=Math.floor(Math.random()*1000)  // this is normal variable
    const [count,setCount]=useState(0)      //this is state variable
    const increaseCount=()=>{
        setCount(count+1)
    }
    return (
    <div style={{textAlign:"center"}}>
        <h2>State demo 3</h2>
        <h2>count--{count}</h2>
        <h2>randomnum= {randomnum}</h2>
        {/* <button onClick={()=>{increaseCount()}}>+</button> */}
        <button onClick={increaseCount}>+</button>
    </div>
    )
}

// as a this increase function dosent have any parameter we can use both function like simple calling and calling with arrow function
