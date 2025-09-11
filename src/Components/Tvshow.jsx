import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import Topnav from "/src/Components/partials/Topnav.jsx";
import Loading from '/src/Components/Loading.jsx';
import Cards from './partials/Cards';
import DropDown from './partials/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';

function Tvshow() {
    const [category , setcategory] = useState('airing_today')
    const [tvshow, settvshow] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = 'zoopflix | tvshow' + category.toUpperCase()
    const Navigate = useNavigate()
  
    const Gettvshow = async ()=>{
      try {
        const {data} = await axios.get(`/tv/${category}?page=${page}`);
        // console.log(data);
        // setpopular(data.results)
        if (data.results.length > 0) {
          settvshow((prev) => [...prev, ...data.results])
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
      if (tvshow.length === 0) {
        Gettvshow()
      } else {
        setpage(1)
        settvshow([])
        Gettvshow()
      }
     }
  
     useEffect(()=>{
      refreshHandler()
     },[category])
     return tvshow.length > 0 ?  (
        <div className='w-screen h-screen px-[5%]'>
          <div className='w-full flex items-center justify-between'>
    
          
            <h1 className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>Navigate(-1)} className="ri-arrow-left-line p-8 text-2xl hover:text-[#dd4343]"></i>
              TV Shows</h1>
            <div className='flex items-center w-[80%]'> <Topnav/>
            <DropDown title='Category' options={['On_The_Air','Top_Rated','Airing_Today']} func={(e) => setcategory(e.target.value)}/>
              <div className='w-[2%]'></div>
            </div>
          </div>
          <InfiniteScroll
          dataLength={tvshow.length} 
          next={Gettvshow}
          hasMore={hasMore}
          loader={<h1>loading...</h1>}
          >
          <Cards data={tvshow} title='tv'/>
          </InfiniteScroll>
          </div>
          
      ) : <Loading/>
}

export default Tvshow
