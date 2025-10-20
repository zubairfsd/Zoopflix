// import React, { useEffect, useState } from 'react';
// import Sidenav from './partials/Sidenav';
// import Topnav from './partials/Topnav';
// import Header from './partials/Header';
// import axios from '../utils/Axios';
// import Loading from './Loading';
// import HorizontalCards from './partials/HorizontalCards';
// import DropDown from './partials/DropDown';

// function Home() {
//     document.title = "Zoopflix | Homepage";
//     const [wallpaper, setwallpaper] = useState(null)
//     const [trending , settrending] = useState(null)
//     const [category , setcategory] = useState('all')
//      const GetHeaderwallpaper = async ()=>{
//       try {

//         const {data} = await axios.get(`/trending/all/day`);
//         // console.log(data);
//         let randomdata = data.results[(Math.random()*data.results.length).toFixed()]
//         setwallpaper(randomdata)
//       }
//       catch (err) {
//         console.log(err);
        
//       }
//      }

//      const GetTrending = async ()=>{
//       try {

//         const {data} = await axios.get(`/trending/${category}/day`);
//         // console.log(data);
//         let randomdata = data.results[(Math.random()*data.results.length).toFixed()]
//         settrending(data.results)
//       }
//       catch (err) {
//         console.log(err);
        
//       }
//      }


//      useEffect(()=>{
//       GetHeaderwallpaper()
//       GetTrending()
//      },[category])
  



//   return wallpaper ? (
    
//     <>
//      <Sidenav />
//      <div className="w-[80%] h-full flex flex-col">
//        <Topnav />
//        <Header data={wallpaper}/>
       
//       <div className='flex justify-between p-4'>
        
//         <h1 className='text-4xl font-bold text-white'>🔥 Trending Now</h1>
//         <br/>
//         <DropDown title='Filter' options={['TV','Movie','All']} func={(e)=> setcategory(e.target.value)}/>
        
//         </div> 
//         <HorizontalCards data={trending}/>


//        <div className="flex-1 overflow-auto overflow-x-hidden p-4">
//          {/* Main content goes here */}
//        </div>
//      </div>
//     </>
   
//  ) : <h1 className='text-3xl text-white'><Loading/></h1>
// }

// export default Home;


import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import DropDown from "./partials/DropDown";
import axios from "../utils/Axios";
import Loading from "./Loading";

function Home() {
  document.title = "Zoopflix | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (err) {
      console.log(err);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHeaderWallpaper();
    getTrending();
  }, [category]);

  if (!wallpaper) return <Loading />;

  return (
    <div className="flex h-screen bg-zinc-900">
      {/* Sidebar */}
      <Sidenav />

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-[380px]">
        <Topnav />
        <Header data={wallpaper} />
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-white">🔥 Trending Now</h1>
          <DropDown
            title="Filter"
            options={["TV", "Movie", "All"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </div>
  );
}

export default Home;


