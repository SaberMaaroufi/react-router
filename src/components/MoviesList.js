import React from 'react'
import MoviesCard from './MoviesCard'

function MoviesList({Movies,search}) {
  return (
    <div className='list'>
        {
          Movies.filter((movie)=>movie.title.trim().toUpperCase().includes(search.toUpperCase().trim())).map((Movie)=><MoviesCard Movie={Movie}/>)

        }
    </div>
  )
}

export default MoviesList