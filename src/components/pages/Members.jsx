import React, { useState,useEffect } from 'react'
import {BoltLoader, Gallery} from "..";
import MemberCard from '../MemberCard';
import styles from '../../style';
import axios from 'axios';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { API } from '../../constants';

// import { eventYears } from '../../constants'; 

const Members = () => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  const [years,setYears]=useState(null)
  let isAvailable=1;
  
  let year=(new Date().getFullYear());
  let month=new Date().getMonth();
  // console.log((new Date().getMonth()));
  if(month>=5)
  {
    year=(year).toString()+'-'+(year+1-2000).toString();
  }
  else
  {
    year=(year-1).toString()+'-'+(year-2000).toString();
  }
  // console.log('year;',year);
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
  
  // console.log(active)
  useEffect(()=>{
    // console.log('active: ',active)
    
    axios.get(`${API}/members/year/${active.replace(' - ','-')}`)
      .then((res)=>{setData(res.data);setLoading(false);})
      .catch((err)=>{
        console.log("error:",err.message);
        setError(err.message);
        setLoading(false);
      }); 

  },[active]);
  
  // let years=new Set(eventYears?.map((x)=>x.eventYear));
  // years=[...years]?.sort().reverse();
  // console.log('Years',years);
  // const selectYear=data?.filter(x=>{return x.eventYear === active});
  // if (selectYear == 0){isAvailable=0;}

  const handleChange = (event) => {
    setActive(event.target.value);
  };

  // console.log("Data: ",data)
  // console.log("Years: ",years)
  // console.log("Active Years: ",active)

  const [dataM,setDataM]=useState(null);
  useEffect(()=>{
    axios.get(`${API}/gallery`)
      .then((res)=>{setDataM(res.data);})
      .catch((err)=>{
        console.log("error:",err.message);
      }); 

  },[]);


  
  return (
    <div className='flex flex-col'>
      
      <div className={`py-10 justify-center items-center px-4 gap-10 flex flex-row w-full animate-[zoomIn_1s_ease-in-out]`}>
        <div className=" flex items-center relative z-[1]">
          <h2 className={`${styles.heading2} text-gradient`}>
            Board Members
          </h2>
        </div>
        <FormControl className='flex w-[10rem]'>
          <Select value={active} onChange={handleChange} >
            {years?.map((x)=>(
              <MenuItem key={x.id} value={x.year}>{x.year}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      
      
      <div>
        <section id="current" className={` ${styles.flexCenter} flex-col relative `}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />


          <div className="flex flex-wrap justify-center w-full z-[1]" data-aos="fade-up" data-aos-duration='1000'>
            {data?.map((item) => 
              <div className='flex' key={item.id}  data-aos="fade-up" data-aos-duration='1000'>
                {/* <span className='flex'>{item.id}</span> */}
                  <div className='flex flex-wrap justify-center items-center'>
                    {item.members.map((member)=>(
                        <MemberCard key={member._id} {...member} className='flex '/>
                    ))}
                  </div>
              </div>
            )}
            {isAvailable === 0 && <div className='flex'><span className={`${styles.heading2} text-center`}>Members of {active} are Yet to be Updated...</span></div>}
              {loading && <div className='flex my-10'> 
                <BoltLoader/>
              </div>}
              {error && <div className='flex'><span className={`${styles.heading2} text-center`}>{error}!</span></div>}
          </div>

          
        </section>    
      </div>
      {/* <Gallery data={dataM} name={'Member'} className='flex'/> */}
    
    </div>
  )
}

export default Members;