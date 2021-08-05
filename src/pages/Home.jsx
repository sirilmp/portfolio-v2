import React from 'react'

function Home() {
    return (
        <div className=' h-500 flex flex-col justify-center'>
                        <h1 className='mb-6 ml-2 sub-font text-green-200'>hi, my name is</h1>
                        <h1 className='main-text-color main-font-900 text-5xl md:text-6xl xl:text-7xl'>Siril M Philip</h1>
                        <h1 className='text-gray-500 main-font-900 mt-4 text-4xl md:text-6xl xl:text-7xl'>I build things for the web.</h1>
       <p className='mt-5 text max-w-xl main-font-400 text-lg md:text-xl text-gray-500'>I am & a front-end developer. trying to build creative innovative websites for which I discover and learn new things</p>
       <a className='mt-7 px-5 py-3 border-2 border-dashed text-base tracking-wider font-normal rounded-md border-green-200  max-w-100 main-font-400 text-green-200 bg-transparent duration-200 hover:bg-green-900 hover:bg-opacity-20' href="">get in touch</a>
        </div>
    )
}

export default Home
