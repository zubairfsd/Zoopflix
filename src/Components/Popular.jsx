
import axios from '../utils/Axios';
import React, { useEffect, useState } from 'react'
import Topnav from "/src/Components/partials/Topnav.jsx";
import Loading from '/src/Components/Loading.jsx';
import Cards from './partials/Cards';
import DropDown from './partials/DropDown';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';

function Popular() {
    const [category , setcategory] = useState('movie')
    const [popular, setpopular] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = 'zoopflix | popular' + category.toUpperCase()
    const Navigate = useNavigate()
  
    const Getpopular = async () =>{
      try {
        const {data} = await axios.get(`/${category}/popular?page=${page}`);
        // console.log(data);
        // setpopular(data.results)
        if (data.results.length > 0) {
          setpopular((prev) => [...prev, ...data.results])
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
      if (popular.length === 0) {
        Getpopular()
      } else {
        setpage(1)
        setpopular([])
        Getpopular()
      }
     }
  
     useEffect(()=>{
      refreshHandler()
     },[category])
     return popular.length > 0 ?  (
        <div className='w-screen h-screen px-[5%]'>
          <div className='w-full flex items-center justify-between'>
    
          
            <h1 className='text-2xl font-semibold text-zinc-400'>
            <i onClick={()=>Navigate(-1)} className="ri-arrow-left-line p-8 text-2xl hover:text-[#dd4343]"></i>
              popular</h1>
            <div className='flex items-center w-[80%]'> <Topnav/>
            <DropDown title='Category' options={['Movie','TV','All']} func={(e) => setcategory(e.target.value)}/>
              <div className='w-[2%]'></div>
            </div>
          </div>
          <InfiniteScroll
          dataLength={popular.length} 
          next={Getpopular}
          hasMore={hasMore}
          loader={<h1>loading...</h1>}
          >
          <Cards data={popular} title={category}/>
          </InfiniteScroll>
          </div>
          
      ) : <Loading/>
}

export default Popular




