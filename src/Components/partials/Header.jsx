// import React from 'react'
// import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'

// function Header({ data }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: 'easeOut' }}
//       style={{
//         background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//       }}
//       className="bg-black w-full h-[60vh] flex flex-col justify-end p-[6.5%] items-start shadow-xl rounded-b-3xl"
//     >
//       <motion.h1
//         className="w-[70%] text-5xl text-white font-extrabold drop-shadow-md"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         {data.original_title || data.title || data.name || data.original_name}
//       </motion.h1>

//       <motion.p
//         className="text-white w-[70%] mt-2 text-lg"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         {data.overview?.slice(0, 260)}...
//         <Link className="text-blue-400 hover:underline ml-2">more</Link>
//       </motion.p>

//       <motion.p
//         className="text-white mt-4 text-sm flex items-center gap-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.7 }}
//       >
//         <i className="text-yellow-400 ri-megaphone-fill text-lg"></i>
//         {data.release_date || 'No Information'}
//       </motion.p>

//       <motion.p
//         className="text-white mt-1 text-sm flex items-center gap-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.9 }}
//       >
//         <i className="text-yellow-400 ri-album-line text-lg"></i>
//         {data.media_type?.toUpperCase() || 'UNKNOWN'}
//       </motion.p>

//       <motion.div
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 1.1 }}
//       >
//         <Link
//           className="text-white p-4 mt-6 inline-block bg-[#DD4343] rounded-xl hover:bg-[#bb3636] transition duration-300"
//         >
//           Watch Trailer
//         </Link>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default Header



import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex flex-col justify-end p-6 sm:p-10 md:p-[6.5%] items-start shadow-xl rounded-b-3xl transition-all"
    >
      <motion.h1
        className="w-full sm:w-[85%] md:w-[70%] text-2xl sm:text-4xl md:text-5xl text-white font-extrabold drop-shadow-md leading-snug"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {data.original_title || data.title || data.name || data.original_name}
      </motion.h1>

      <motion.p
        className="text-white w-full sm:w-[85%] md:w-[70%] mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {data.overview ? `${data.overview.slice(0, 160)}...` : "No description available."}
        <Link className="text-blue-400 hover:underline ml-2">more</Link>
      </motion.p>

      <motion.p
        className="text-white mt-4 text-xs sm:text-sm flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <i className="text-yellow-400 ri-megaphone-fill text-base sm:text-lg"></i>
        {data.release_date || "No Information"}
      </motion.p>

      <motion.p
        className="text-white mt-1 text-xs sm:text-sm flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <i className="text-yellow-400 ri-album-line text-base sm:text-lg"></i>
        {data.media_type?.toUpperCase() || "UNKNOWN"}
      </motion.p>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        <Link className="text-white p-3 sm:p-4 mt-5 sm:mt-6 inline-block bg-[#DD4343] rounded-lg sm:rounded-xl hover:bg-[#bb3636] transition duration-300 text-sm sm:text-base">
          Watch Trailer
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Header;
