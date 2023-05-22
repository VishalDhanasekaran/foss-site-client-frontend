import React, { useState,useEffect } from 'react'
import {BoltLoader, Gallery} from "..";
import MemberCard from '../MemberCard';
import axios from 'axios';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { API } from '../../constants';


const Members = () => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [years,setYears]=useState(null)
  let isAvailable=1;
  
  let year=(new Date().getFullYear());
  let month=new Date().getMonth();
  if(month>=5)
  {
    year=(year).toString()+'-'+(year+1-2000).toString();
  }
  else
  {
    year=(year-1).toString()+'-'+(year-2000).toString();
  }
  const [active,setActive]=useState(year.replace('-',' - '));
  
  useEffect(()=>{
    axios.get(`${API}/members/years`)
    .then((res)=>{setYears(res.data);setLoading(false);})
    .catch((err)=>{
      console.log("error:",err.message);
      setError(err.message);
      setLoading(false);
    }); 
    
  },[]);
  
  useEffect(()=>{
    
    axios.get(`${API}/members/year/${active.replace(' - ','-')}`)
      .then((res)=>{setData(res.data);setLoading(false);})
      .catch((err)=>{
        console.log("error:",err.message);
        setError(err.message);
        setLoading(false);
      }); 

  },[active]);
  
  const handleChange = (event) => {
    setActive(event.target.value);
  };


  const [dataM,setDataM]=useState(null);
  useEffect(()=>{
    axios.get(`${API}/membersgallery`)
      .then((res)=>{setDataM(res.data);})
      .catch((err)=>{
        console.log("error:",err.message);
      }); 

  },[]);


  
  return (
    <div className='flex flex-col'>
      
      <div className={`py-10 justify-center items-center px-4 gap-10 flex flex-col w-full animate-[zoomIn_1s_ease-in-out]`}>
        <div className=" flex items-center relative z-[1]">
          <h2 className={`font-poppins font-semibold text-5xl text-gradient w-full text-gradient`}>
            Board Members
          </h2>
        </div>
        <FormControl className='flex w-[10rem]'>
          <Select value={active} onChange={handleChange} >
            {years?.map((x)=>(
              <MenuItem key={x.id} value={x.year}>{x.year}</MenuItem>
            )).reverse()}
          </Select>
        </FormControl>
      </div>

      
      
      <div>
        <section id="current" className={`  flex-col relative `}>

          <div className="flex flex-wrap justify-center w-full z-[1]" data-aos="fade-up" data-aos-duration='1000'>
            {data?.map((item) => 
              <div className='flex' key={item.id}  data-aos="fade-up" data-aos-duration='1000'>
                  <div className='flex flex-wrap justify-center items-center '>
                    {item.members.map((member)=>(
                        <MemberCard key={member._id} {...member} className='flex '/>
                    ))}
                  </div>
              </div>
            )}
            {isAvailable === 0 && <div className='flex'><span className={`font-poppins font-semibold text-5xl text-gradient w-fulltext-center`}>Members of {active} are Yet to be Updated...</span></div>}
              {loading && <div className='flex py-10'> 
                <BoltLoader/>
              </div>}
              {error && <div className='flex'><span className={`font-poppins font-semibold text-5xl text-gradient w-full text-center`}>{error}!</span></div>}
          </div>

          
        </section>    
      </div>
      {dataM && <div className='flex'>
        <Gallery data={dataM} name={'Members'}/>
      </div>}
    
    </div>
  )
}

export default Members;