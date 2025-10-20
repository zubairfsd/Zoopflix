// import React from 'react'
//  import { Link } from 'react-router-dom'
 
//  function Sidenav() {
//    return (
//      <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
//        <h1 className='text-2xl text-white font-bold'> <i className="text-[#DD4343] ri-tv-fill mr-2"></i>
//          <span className='text-2xl'>Movie App.</span>
//        </h1>
//        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
//          <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
 
//          <Link to='/trending' className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-fire-fill"></i>Trending</Link>
 
//          <Link to='/popular' className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-bard-fill"></i>Popular</Link>
 
//          <Link to="/movie" className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-movie-2-fill"></i>Movie</Link>
 
//          <Link to='/tvshow' className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-tv-2-fill"></i>Tv Shows</Link>
 
//          <Link to="/people" className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-team-fill"></i>People</Link>
//        </nav>
//        <hr className='border-none h-[1px] bg-zinc-400' />
//        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
//          <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>
 
//          <Link to="/about" className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-information-fill"></i>About Us</Link>
 
//          <Link to="/contact" className="hover:bg-[#DD4343] hover:text-white duration-300 rounded-lg p-5"><i className="mr-2 ri-contacts-fill"></i>Contact Us</Link>
 
//        </nav>
//      </div>
//    )
//  }
 
//  export default Sidenav



import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button Top-Right */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 text-white bg-[#DD4343] p-3 rounded-xl shadow-md flex items-center justify-center w-12 h-12 transition hover:bg-[#bb3636]"
        onClick={() => setOpen(!open)}
      >
        <i className={`ri-${open ? "close-line" : "menu-line"} text-2xl`}></i>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-zinc-900 border-r-2 border-zinc-700 p-6 md:p-10 transform transition-transform duration-300 ease-in-out z-50
          w-[70%] md:w-[18%] ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h1 className="text-2xl text-white font-bold mb-8">
          <i className="text-[#DD4343] ri-tv-fill mr-2"></i> Movie App.
        </h1>

        <nav className="flex flex-col text-zinc-400 text-lg gap-3">
          <h1 className="text-white font-semibold text-lg mb-3">New Feeds</h1>
          <Link to="/trending" className="hover:bg-[#DD4343] p-3 rounded-lg hover:text-white">
            🔥 Trending
          </Link>
          <Link to="/popular" className="hover:bg-[#DD4343] p-3 rounded-lg hover:text-white">
            ⭐ Popular
          </Link>
          <Link to="/movie" className="hover:bg-[#DD4343] p-3 rounded-lg hover:text-white">
            🎬 Movie
          </Link>
          <Link to="/tvshow" className="hover:bg-[#DD4343] p-3 rounded-lg hover:text-white">
            📺 TV Shows
          </Link>
          <Link to="/people" className="hover:bg-[#DD4343] p-3 rounded-lg hover:text-white">
            👥 People
          </Link>
        </nav>

        <hr className="my-5 border-zinc-700" />

        <nav className="flex flex-col text-zinc-400 text-lg gap-3">
          <h1 className="text-white font-semibold text-lg mb-3">Website Info</h1>
          <Link to="/about" className="hover:bg-[#DD4343] p-3 rounded-lg hover:text-white">
            ℹ️ About Us
          </Link>
          <Link to="/contact" className="hover:bg-[#DD4343] p-3 rounded-lg hover:text-white">
            📞 Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Sidenav;
