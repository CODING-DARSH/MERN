import React from 'react'

export const Mapdemo5 = () => {
    var movies=[
        { id: 1, title: "YJHD", year: 2010, rating: 8.8, genre: "Romance", language: "Hindi"},
        {id :2,title:"Dhoom 3",year:2013,rating:7.5,genre:"Action",language:"Hindi"},
        {id :3,title:"Sholay",year:1970,rating:9.5,genre:"Action",language:"Hindi"},
    ];
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo5</h1>
        <table className="table">
         <thead>
            <tr>
                   <th>Id</th>
                   <th>Movie</th>
            <th>Year</th>
            <th>Ratings</th>
            <th>Genre</th>
            <th>Language</th>
            </tr>
         </thead>
        
        <tbody>
            {
                    movies.map((movie)=>{
                return(
                    <tr>
                        <td>{movie.id}</td>
                        <td>{movie.title}</td>
                        <td style={{color:movie.year<2000? "red":"black"}}>{movie.year}</td>
                        <td style={{backgroundColor:movie.rating>=8.5 ? "lightgreen":"white"}}>{movie.rating}</td>
                        <td style={{backgroundColor:movie.genre=="Action"&&"lightblue"}}>{movie.genre}</td>
                        <td>{movie.language}</td>
                    </tr>
                    
                );
            }
        )
            }
        </tbody>
        </table>
    </div>
  )
}
