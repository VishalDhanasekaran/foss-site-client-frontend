import React, { useState,useEffect } from 'react'
import { membersList } from '../../constants';
import MemberCard from '../MemberCard';
import styles from '../../style';
import axios from 'axios';

const Members = () => {
  const [active,setActive]=useState('1');

  const [data,setData]=useState(null);

  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get('https://foss-backend.onrender.com/api/users');
      setData(response.data);
    }
    fetchData();
  },[]);

  console.log(data);
  
  return (
    <div className='flex flex-col'>
      
      <div className={`${styles.paddingY} ${styles.flexCenter} animate-[zoomIn_1s_ease-in-out]`}>
          <select className='cursor-pointer bg-primary h-10 font-poppins text-2xl rounded-lg outline-none' value={active} onChange={(e)=>{setActive(e.target.value)}}>
            <option className={`my-4 font-poppins text-2xl`} value={1}>Current Board</option>
            <option className={`my-4 font-poppins text-2xl`} value={2}>Previous Board</option>
          </select>
      </div>
      
      <div>
        {active==='1' && <section id="current" className={` ${styles.flexCenter} flex-col relative `}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

          <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] animate-[zoomIn_1s_ease-in-out]">
            <h2 className={`${styles.heading2} text-center text-gradient`}>
              Current Board Members
            </h2>
          </div>

          <div className="flex flex-wrap justify-center w-full z-[1]">
            {data && data.map((card) => 
              <div data-aos="fade-up" data-aos-duration='1000'>
                <MemberCard key={card._id} {...card} />
              </div>
            )}
          </div>
          
        </section>}
        
        {active==='2' &&<section id="previous" className={` ${styles.flexCenter} flex-col relative `}>

          <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]" data-aos="fade-up" data-aos-duration='1000'>
            <h2 className={`${styles.heading2} text-center text-gradient`}>
              Previous Board Members
            </h2>
          </div>

          <div className="flex flex-wrap justify-center w-full z-[1]">
            {data && data.map((card) => 
              <div data-aos="fade-up" data-aos-duration='1000'>
                <MemberCard key={card._id} {...card} />
              </div>
            )}
          </div>
        </section>}
      </div>
    
    </div>
  )
}

export default Members;