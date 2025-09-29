import React, { useState } from 'react'

export const Statedemo1 = () => {
    const[count,setCount]=useState(0)   // count is variable and setCount is inbuilt function and useState is function used to store update and render values in UI
    const increaseValue=()=>{
        setCount(count+1)
        console.log("count=",count);
    }
    const decreaseValue=(x)=>{
        setCount(count-x)
        console.log("count",count);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2>Use state demo</h2>
        <h3>count {count}</h3>
        <button onClick={increaseValue}>INCRESE</button>
        <button onClick={() => decreaseValue(10)}>Decrease</button>  
        {/* <button onClick={()=>{decreseCount(100)}}>decrese</button> */}
    </div>
  )
}

// we have used arow function in Decrease becoz it take a parameter and hence it will execute directly once it will run to stop it and make it only work on click for that reason we are using arrow function

// while in increase function it is already a function and it dosent need any parameter and it wont run directly so therfore it will work only on click for that reason we wont be using arrow function