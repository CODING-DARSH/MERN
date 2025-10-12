import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../common/MyButton'

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
      <MyButton name='netflixmovies'class="btn btn-success"></MyButton>
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
