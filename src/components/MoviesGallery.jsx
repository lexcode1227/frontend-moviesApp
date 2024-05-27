import React from 'react'

const MoviesGallery = ({movies}) => {
  return (
    <section className='flex flex-col gap-7 w-full h-auto mb-9'>
        <div className='flex justify-between'>
            <h2 className='font-Inter font-bold text-4xl text-whiteText'>Trending</h2>
            <h3 className='font-Inter font-normal hover:font-semibold text-subtitlesText'>See More</h3>
        </div>
        <ul className='flex flex-row justify-between flex-nowrap max-w-full gap-2'>
            {movies.map(movie =>
                <li className='flex flex-col gap-4' key={movie.id}>
                    <a href={movie.urlVideo}><img src={movie.image} alt={`image for ${movie.title}`} width={"210"} height={"315"} /></a>
                    <h2>{movie.title}</h2>
                    <h2>{`Director: ${movie.director}`}</h2>
                    <h2>{`${movie.category}`}</h2>
                </li>
            )}
        </ul>
  </section>
  )
}

export default MoviesGallery