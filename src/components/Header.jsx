import React from 'react'

const Header = () => {
  return (
    <section className='flex flex-col sm:flex-row h-[500px] px-6'>
        <section className='w-1/2 flex flex-col h-full justify-center gap-5 text-whiteText'>
            <div>
                <h2 className='font-Bebas text-8xl text-whiteText'>FIND MOVIES</h2>
                <h1 className='font-Bebas text-7xl'>FROM 80's, 90's AND 2000</h1>
            </div>
            <p className='font-normal text-2xl'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <button className='font-semibold text-2xl border border-subtitlesText rounded hover:bg-subtitlesText hover:text-backgroundColor w-52 p-3'>Watch Tutorial</button>
        </section>
        <section className='w-1/2'>
            <h1>IMAGEN</h1>
        </section>
    </section>
  )
}

export default Header