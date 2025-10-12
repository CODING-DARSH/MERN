import React, { useState } from 'react'
import { BooksList } from './BooksList'

export const Books = () => {
const [books, setbooks] = useState(
[
{id:101,name:"java",price:200,ratings:7.0},
{id:102,name:"C++",price:200,ratings:7.5},
{id:103,name:"Python",price:200,ratings:8.0}
]
)
const deleteBooks=(id)=>{
    const deletearray=books.filter((book)=>book.id!=id) //it will append only those thing which are true
    setbooks(deletearray)
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>Books</h1>
        <BooksList books={books} deleteBooks={deleteBooks}></BooksList>
    </div>
  )
}
