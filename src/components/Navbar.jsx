import React from 'react'
import Logo from '../assets/moviesLogo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6'>
        <div className='w-1/2'>
          <img src={Logo} alt="movie logo app" width={"190"} height={"65"}/> 
        </div>
        <nav className='w-1/2'>
            <ul className='h-full flex gap-2 justify-between items-center text-whiteText'>
                <li><a href="#" className='font-normal hover:font-bold'>Home</a></li>
                <li><a href="#" className='font-normal hover:font-bold'>Explore</a></li>
                <li><a href="#" className='font-normal hover:font-bold'>Genre</a></li>
                <li><a href="#" className='font-normal hover:font-bold'>News</a></li>
                <li><a href="#" className='font-normal hover:font-bold'>Movies</a></li>
                <li><a href="#" className='font-normal hover:font-bold'>TV Shows</a></li>
                <li><a href="#" className='bg-green rounded p-2 font-bold hover:bg-whiteText hover:text-backgroundColor'>Log in</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar