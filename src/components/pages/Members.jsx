import React, { useState,useEffect } from 'react'
import { RingLoader } from 'react-spinners';
import MemberCard from '../MemberCard';
import styles from '../../style';
import axios from 'axios';

const Members = () => {
  const [active,setActive]=useState('1');
  const [loading,setLoading]=useState(true);
  const [data,setData]=useState(null);
  const [error,setError]=useState(null);
  let isAvailable=1;

  let year=(new Date().getFullYear());
  let month=new Date().getMonth();
  // console.log((new Date().getMonth()));
  if(month>=5)
  {
    year=(year).toString()+' - '+(year+1).toString().slice(2);
  }
  else
  {
    year=(year-1).toString()+' - '+(year).toString()/slice(2);
  }
  // console.log(year);

  useEffect(()=>{
    axios.get('https://foss-backend.onrender.com/api/users')
      .then((res)=>{setData(res.data);setLoading(false);})
      .catch((err)=>{
        console.log("error:",err.message);
        setError(err.message);
        setLoading(false);
      });
    setActive(year);
  },[]);

  const years=new Set(data?.map((x)=>x.period));
  const Years=[...years]?.sort().reverse();
  const selectYear=data?.filter(x=>{return x.period === active});
  if (selectYear == 0){isAvailable=0;}
  
  return (
    <div className='flex flex-col'>
      
      <div className={`${styles.paddingY} ${styles.flexCenter} animate-[zoomIn_1s_ease-in-out]`}>
          <select className='cursor-pointer bg-primary h-10 font-poppins text-2xl rounded-lg outline-none' value={active} onChange={(e)=>{setActive(e.target.value)}}>
          {Years?.map((x)=>(
            <option className={`my-4 font-poppins text-2xl`} value={x}>{x}</option>
          ))}
          </select>
      </div>
      
      <div>
        <section id="current" className={` ${styles.flexCenter} flex-col relative `}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

          <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-6 relative z-[1] animate-[zoomIn_1s_ease-in-out]">
            <h2 className={`${styles.heading2} text-center text-gradient`}>
              Board Members
            </h2>
          </div>

          <div className="flex flex-wrap justify-center w-full z-[1]">
            {selectYear?.map((card) => 
              <div data-aos="fade-up" data-aos-duration='1000'>
                <MemberCard key={card._id} {...card} />
              </div>
            )}
            {isAvailable === 0 && <div className='flex'><span className={`${styles.heading2} text-center`}>Members of {active} are Yet to be Updated...</span></div>}
              {loading && <div className='flex my-10'> 
                <RingLoader color={'#eecc21'} loading={loading} size={150}/>
              </div>}
              {error && <div className='flex'><span className={`${styles.heading2} text-center`}>{error}!</span></div>}
          </div>
          
        </section>        
      </div>
    
    </div>
  )
}

export default Members;