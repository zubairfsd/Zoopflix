import React from 'react'
 import { Link } from 'react-router-dom'
 
 function Sidenav() {
   return (
     <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
       <h1 className='text-2xl text-white font-bold'> <i className="text-[#DD4343] ri-tv-fill mr-2"></i>
         <span className='text-2xl'>Movie App.</span>
       </h1>
       <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
         <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
 
         <Link to='/trending' className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-fire-fill"></i>Trending</Link>
 
         <Link to='/popular' className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-bard-fill"></i>Popular</Link>
 
         <Link to="/movie" className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-movie-2-fill"></i>Movie</Link>
 
         <Link to='/tvshow' className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-tv-2-fill"></i>Tv Shows</Link>
 
         <Link to="/people" className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-team-fill"></i>People</Link>
       </nav>
       <hr className='border-none h-[1px] bg-zinc-400' />
       <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
         <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>
 
         <Link to="/about" className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-information-fill"></i>About Us</Link>
 
         <Link to="/contact" className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-contacts-fill"></i>Contact Us</Link>
 
       </nav>
     </div>
   )
 }
 
 export default Sidenav