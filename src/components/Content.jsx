import React from 'react'

export default function Content() {
      var year=2025
      var isboolean=true
      var user={
        name:"Darsh",
        id:20,
        age:23
      }
  return (
    <div>
    <p>We can only written 1 tag at a time inside a function</p>
    <p>We must close each and every tag inside this</p>
    <p>is true? {isboolean==true?"Yes":"No"}</p>  
    <p>Whatever written inside this return function will only be displayed on screen all js things should be witten outside return and inside function</p>
    <p></p>
    <h1>Hello</h1>
    <h1>year={year}</h1>
    <p>name= {user.name}</p>
    <p>age= {user.age}</p>
    </div>
  )
}

