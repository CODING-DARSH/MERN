import React from 'react'
import { MyTable } from '../common/MyTable'

export const Tabledemo1 = () => {
      const books =[
    { id: 101, name: "java", price: 200, ratings: 7.9},
    { id: 102, name: "python", price: 250, ratings: 8.9 },
    { id: 103, name: "js", price: 200, ratings: 9.0 },
   ]
  return (
    <div style={{textAlign:"center"}}>
           <h1>TABLE IMPLEMENTATION</h1>
           <MyTable header={Object.keys(books[0])}></MyTable>
    </div>
  )
}
