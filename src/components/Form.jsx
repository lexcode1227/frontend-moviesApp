import React from 'react'

const Form = () => {
  return (
    <section className='flex flex-col gap-5 w-2/3 px-6'>
        <section className='flex flex-col gap-5 w-2/3'>
          <form className='flex flex-col gap-2' action="">
            <label htmlFor="">Titulo de la pelicula</label>
            <input className='p-3 border rounded-lg w-2/3' type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Escribe el titulo pelicula'/>
            <label htmlFor="">Director de la pelicula</label>
            <input className='p-3 border rounded-lg w-2/3' type="text" value={director} onChange={(e)=> setDirector(e.target.value)} placeholder='Director'/>
            <label htmlFor="">Categoria de la pelicula</label>
            <input className='p-3 border rounded-lg w-2/3' type="text" value={category} onChange={(e)=> setCategory(e.target.value)} placeholder='Categoria de la pelicula'/>
            <label htmlFor="">url de la pelicula</label>
            <input className='p-3 border rounded-lg w-2/3' type="text" value={urlVideo} onChange={(e)=> setUrlVideo(e.target.value)} placeholder='Url video'/>
          </form>
          <button className='bg-[#b8b7b7] border rounded-lg p-3 w-1/3 text-black font-bold' onClick={createMovie}>Agregar tarea</button>
        </section>
        <section>
            <div className='flex justify-between'>
                <h2 className='font-Inter font-bold text-4xl text-whiteText'>Trending</h2>
                <h3 className='font-Inter font-normal hover:font-semibold text-subtitlesText'>See More</h3>
            </div>
            <ul className='flex flex-col justify-center w-full gap-2'>
            {movies.map(movie =>
                <li className='flex w-full gap-4' key={movie.id}>
                <input className='p-2 border rounded-lg w-2/3 bg-[#a585f4] text-white font-semibold' type="text" value={movie.title} onChange={(e) => updateMovie(movie.id, { title: e.target.value})}/>
                <button className='hover:bg-[#a585f4] p-2 rounded font-semibold' onClick={() => deleteMovie(movie.id)}>Eliminar</button>
                </li>
            )}
            </ul>
        </section>
    </section>
  )
}

export default Form