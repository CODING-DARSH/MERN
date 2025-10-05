import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShow = () => {
  const shows=[
    {
      id:100,
      name:"Squid Game"
    },
    {
      id:101,
      name:"Mirzapur"
    },
    {
      id:102,
      name:"Stranger things"
    },
    {
      id:103,
      name:"Mismatched"
    }
  ]
  return (
    <div style={{textAlign:"center"}}>
    <h1>NetflixShow</h1>
    {
      shows.map((show)=>{
        return <li>
          <Link to={`/watch/${show.name}`}>{show.name}</Link>
        </li>
      })
    }
    </div>
  )
}
