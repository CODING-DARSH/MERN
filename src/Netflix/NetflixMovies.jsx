import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixMovies</h1>
        <ul>
          <li>
            <Link to="/watch/raid">Raid</Link>
          </li>
         <li>
            <Link to="/watch/3idiots">3 Idiiots</Link>
          </li>
          <li>
            <Link to="/watch/Kantara">Kantara</Link>
          </li>
        </ul>
    </div>
  )
}
