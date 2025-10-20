// import React, { useEffect, useState } from 'react'
//  import { Link } from 'react-router-dom'
//  import axios from '../../utils/Axios'
//  import altpic from '/pic.jpg'
 
//  function Topnav() {
//    const [query, setquery] = useState([]); // jo bhi tum type kar rahe ho 
//    const [searches, setsearches] = useState([]); // loading data
 
//    const getSearches = async () => {
//      try {
//        const { data } = await axios.get(`/search/multi?query=${query}`);
//        // console.log(data);
//        setsearches(data.results)
//      } catch (err) {
//        console.log("error is valid", err);
//      }
//    }
//    useEffect(() => {
//      getSearches()
//    }, [query])
 
 
//    return (
//      <div className="w-[75%] h-[10vh] relative flex mx-auto items-center ">
//        <i className="text-3xl text-zinc-400 ri-search-line"></i>
//        <input
//          value={query}
//          onChange={(e) => setquery(e.target.value)}
//          className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
//          type="text"
//          placeholder="search anything"
//        />
//        {query.length > 0 && (
//          <i
//            onClick={() => setquery("")}
//            className="right-0 text-zinc-400 text-3xl ri-close-fill"
//          ></i>
//        )}
 
//        <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
 
//          {searches.map((item, index) => (
//            <Link key={index}
//              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
//            >
//              <img
//                className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
//                src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}` : altpic}
//              />
//              <span>
//                {item.name || item.original_title || item.title || item.original_name}
//              </span>
//            </Link>
//          ))}
//        </div>
//      </div>)
//  }
 
//  export default Topnav


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";
import altpic from "/pic.jpg";

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const getSearches = async () => {
    try {
      if (!query.trim()) {
        setsearches([]);
        return;
      }
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results || []);
    } catch (err) {
      console.log("error is valid", err);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      getSearches();
    }, 400);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="w-full md:w-[75%] h-[10vh] relative flex items-center mx-auto px-3 sm:px-6 z-30">
      {/* Search Icon */}
      <i className="text-2xl sm:text-3xl text-zinc-400 flex-shrink-0 mr-2"></i>

      {/* Input Field */}
      <input
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="flex-1 sm:flex-none w-full sm:w-[60%] text-zinc-200 p-3 sm:p-4 text-sm sm:text-base outline-none border-none bg-zinc-800 placeholder:text-zinc-500 rounded-xl shadow-md transition focus:ring-2 focus:ring-[#DD4343]"
        type="text"
        placeholder="Search movies or shows..."
      />

      {/* Close Icon */}
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-2xl sm:text-3xl cursor-pointer hover:text-white transition ml-2 flex-shrink-0"
        ></i>
      )}

      {/* Dropdown */}
      {searches.length > 0 && (
        <div className="absolute w-full sm:w-[70%] max-h-[60vh] bg-zinc-200 top-full left-0 sm:left-[10%] overflow-auto rounded-xl shadow-lg z-50 mt-2">
          {searches.map((item, index) => (
            <Link
              key={index}
              to={`/details/${item.id}`}
              className="hover:text-black hover:bg-zinc-300 duration-200 font-semibold text-zinc-700 w-full p-3 sm:p-4 flex justify-start items-center gap-3 border-b border-zinc-300 rounded-md"
            >
              <img
                className="w-[7vh] h-[7vh] sm:w-[10vh] sm:h-[10vh] object-cover rounded-md shadow-md flex-shrink-0"
                src={
                  item.backdrop_path || item.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        item.backdrop_path || item.profile_path
                      }`
                    : altpic
                }
                alt={item.title || item.name}
              />
              <span className="text-xs sm:text-sm md:text-base truncate">
                {item.name || item.original_title || item.title || item.original_name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Topnav;

