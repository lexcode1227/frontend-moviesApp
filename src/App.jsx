import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Header from './components/Header'
import MoviesGallery from './components/MoviesGallery'

function App() {
  const [movies, setMovies] = useState([])

  const urlApi = 'http://localhost:4000/movies'
  const fakeMovies = [
    {
      id: 1,
      title: "Iron Man",
      director: "Jon Favreau",
      category: "Accion",
      urlVideo: "https://youtu.be/Rxxfxhuob04",
      image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tFCTNx7foAsUQpgu2x1KjAJD1wT.jpg",
    },
    {
      id: 2,
      title: "Iron Man 2",
      director: "Jon Favreau",
      category: "Accion",
      urlVideo: "https://youtu.be/Rxxfxhuob04",
      image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tFCTNx7foAsUQpgu2x1KjAJD1wT.jpg",
    },
    {
      id: 3,
      title: "Iron Man 3",
      director: "Jon Favreau",
      category: "Accion",
      urlVideo: "https://youtu.be/Rxxfxhuob04",
      image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tFCTNx7foAsUQpgu2x1KjAJD1wT.jpg",
    },
    {
      id: 4,
      title: "Capitan America",
      director: "Jon Favreau",
      category: "Accion",
      urlVideo: "https://youtu.be/Rxxfxhuob04",
      image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tFCTNx7foAsUQpgu2x1KjAJD1wT.jpg",
    },
    {
      id: 5,
      title: "Capitan America 2",
      director: "Jon Favreau",
      category: "Accion",
      urlVideo: "https://youtu.be/Rxxfxhuob04",
      image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tFCTNx7foAsUQpgu2x1KjAJD1wT.jpg",
    },
  ]

  useEffect(()=>{
    fetchMovies()
  }, [])

  const fetchMovies = async() => {
    try {
      const response = await axios.get(urlApi)
      if (response.data.length !== 0) {
        setMovies(response.data)
      } else {
        setMovies(fakeMovies)
      }
    } catch (error) {
      console.error('Error al recuperar las tareas', error);
    }
  }

  return (
    <main className='bg-backgroundColor'>
      <Navbar/>
      <Header/>
      <section className='flex flex-col justify-center items-center mt-10 gap-6 w-full text-whiteText px-6'>
        <h1 className=' w-full font-Bebas text-7xl text-left'>All Movies</h1>
        <MoviesGallery movies={movies}/>
      </section>
    </main>
  )
}

export default App
