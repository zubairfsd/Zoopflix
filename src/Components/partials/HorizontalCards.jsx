// import React from 'react'
// import { Link } from 'react-router-dom'

// function HorizontalCards({data}) {
//   return (
//     <div className='w-full p-3'>
//       <div className='w-full flex gap-5 overflow-x-auto p-2'>
//         {data.length > 0 ? data.map((d,i)=>(
//             <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%] h-[35vh] bg-zinc-900 rounded-lg overflow-hidden shadow-lg relative cursor-pointer mb-2">
//                 <img src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} alt="" />

//                 <div className='text-white text-2xl'>
//                   <h1>{d.title || d.name || d.original_name || d.original_title}</h1>
//                   <p className='text-sm'>{d.overview.slice(0,49)}</p>
//                 </div>
//             </Link>
//         )) : <h1>nothing to show</h1>}
//       </div>
//     </div>
//   )
// }

// export default HorizontalCards


import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({ data }) {
  return (
    <div className="w-full p-3 sm:p-5">
      <div className="w-full flex gap-4 sm:gap-5 overflow-x-auto p-2 scroll-smooth">
        {data.length > 0 ? (
          data.map((d, i) => (
            <Link
              to={`/${d.media_type}/details/${d.id}`}
              key={i}
              className="flex-shrink-0 min-w-[60%] sm:min-w-[40%] md:min-w-[25%] lg:min-w-[18%] h-[30vh] sm:h-[35vh] md:h-[40vh] bg-zinc-900 rounded-xl overflow-hidden shadow-lg relative cursor-pointer mb-2 hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`}
                alt={d.title || d.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 flex flex-col justify-end">
                <h1 className="text-white text-sm sm:text-base md:text-lg font-semibold truncate">
                  {d.title || d.name || d.original_name || d.original_title}
                </h1>
                <p className="text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">
                  {d.overview ? d.overview.slice(0, 60) + "..." : "No description available."}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-white text-center w-full">Nothing to show</h1>
        )}
      </div>
    </div>
  );
}

export default HorizontalCards;
