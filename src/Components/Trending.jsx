import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import Topnav from "/src/Components/partials/Topnav.jsx";
import Loading from '/src/Components/Loading.jsx';
import Cards from './partials/Cards';
import DropDown from './partials/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';

function Trending() {
  const [category , setcategory] = useState('all')
  const [duration, setduration] = useState('day')
  const [trending, settrending] = useState([])
  const [page, setpage] = useState(1)
  const [hasMore, sethasMore] = useState(true)
  document.title = 'zoopflix | Trending' + category.toUpperCase()
  const Navigate = useNavigate()

  const GetTrending = async ()=>{
    try {
      const {data} = await axios.get(`/trending/${category}/${duration}?page=${page }/day`);
      // console.log(data);
      // settrending(data.results)
      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results])
        setpage((prev) => prev +1)
      }
      else {
        sethasMore(false)
      }
    }
    catch (err) {
      console.log(err);
    }
   }

   const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending()
    } else {
      setpage(1)
      settrending([])
      GetTrending()
    }
   }

   useEffect(()=>{
    refreshHandler()
   },[category,duration])
  return trending.length > 0 ?  (
    <div className='w-screen h-screen px-[5%]'>
      <div className='w-full flex items-center justify-between'>

      
        <h1 className='text-2xl font-semibold text-zinc-400'>
        <i onClick={()=>Navigate(-1)} className="ri-arrow-left-line p-8 text-2xl hover:text-[#dd4343]"></i>
          Trending</h1>
        <div className='flex items-center w-[80%]'> <Topnav/>
        <DropDown title='Category' options={['Movie','TV','All']} func={(e) => setcategory(e.target.value)}/>
          <div className='w-[2%]'></div>
        <DropDown title='Duration' options={['Week','Day',]} func={(e) => setduration(e.target.value)}/>
        </div>
      </div>
      <InfiniteScroll
      dataLength={trending.length} 
      next={GetTrending}
      hasMore={hasMore}
      loader={<h1>loading...</h1>}
      >
      <Cards data={trending} title='tv'/>
      </InfiniteScroll>
      </div>
      
  ) : <Loading/>
}

export default Trending
