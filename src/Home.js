import React from 'react'
import MoviesCard from './components/MoviesCard'

function Home ({Movies,search}) {
  return (
    <div className='list'>
        {
          Movies.filter((movie)=>movie.title.trim().toUpperCase().includes(search.toUpperCase().trim())).map((Movie)=><MoviesCard Movie={Movie}/>)

        }
    </div>
  )
}

export default Home