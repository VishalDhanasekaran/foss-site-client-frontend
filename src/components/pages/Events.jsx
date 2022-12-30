import React,{useState,useEffect} from 'react'
import styles from '../../style';
import AnnounceCard from '../AnnounceCard'
import { RingLoader } from 'react-spinners';
import axios from 'axios';

const Events = () => {
  const [active,setActive]=useState('1');
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  let isAvailable=1;

  let year=(new Date().getFullYear());
  let month=new Date().getMonth();
  console.log((new Date().getMonth()));
  if(month>=5)
  {
    year=(year).toString()+' - '+(year+1-2000).toString();
  }
  else
  {
    year=(year-1).toString()+' - '+(year-2000).toString();
  }
  console.log(year);

  useEffect(()=>{
    axios.get('https://foss-backend.onrender.com/api/events')
      .then((res)=>{setData(res.data);setLoading(false);})
      .catch((err)=>{
        console.log("error:",err.message);
        setError(err.message);
        setLoading(false);
      });
    setActive(year);
  },[]);
  
  const years=new Set(data?.map((x)=>x.eventYear));
  const Years=[...years]?.sort().reverse();
  const selectYear=data?.filter(x=>{return x.eventYear === active});
  if (selectYear == 0){isAvailable=0;}

  return (
    <div className='flex flex-col'>
      
      <div className={`${styles.paddingY} ${styles.flexCenter} animate-[zoomIn_1s_ease-in-out]`}>
        <select className='cursor-pointer bg-primary h-10 font-poppins text-2xl rounded-lg outline-none' onChange={(e)=>{setActive(e.target.value)}}>
          {Years?.map((x)=>(
            <option className={`my-4 font-poppins text-2xl`} value={x}>{x}</option>
          ))}
        </select>
      </div>

      <div className={`flex flex-col`}>
        
        <section id={"events"} className={` ${styles.flexCenter} flex-col relative `}>
          <div data-aos="fade-up" data-aos-duration='1000'>
            <div className={`w-full flex justify-between items-center md:flex-row flex-col relative z-[1]`}>
              <h2 className={`${styles.heading2} mb-3 text-center text-gradient`}>
                Events
              </h2>
            </div>
            
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
        
            <div className="flex flex-wrap justify-center w-full z-[1]" >
              {selectYear?.map((card) => 
                <div data-aos="fade-up" data-aos-duration='1000'>
                  <a href={`/events/${card._id}`}><AnnounceCard key={card.id} {...card} /></a>
                  
                </div>
              )}

              {isAvailable === 0 && <div className='flex'><span className={`${styles.heading2} text-center`}>Events Conducted in {active} are Yet to be Updated...</span></div>}
              {loading && <div className='flex my-10'> 
                <RingLoader color={'#eecc21'} loading={loading} size={150}/>
              </div>}
              {error && <div className='flex'><span className={`${styles.heading2} text-center`}>{error}!</span></div>}
            </div>
          </div>

        </section>
        
        <section id={'gallery'} className={`flex-1 ${styles.flexStart} ${styles.paddingY} flex-col xl:px-0 sm:px-16 px-6`} data-aos="fade-up" data-aos-duration='1000'>
          <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-gradient text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
            Events Gallery
          </h2>
          <p>
            Events Picture can be displayed here...
          </p>
        </section>
      </div>
    </div>
  )
}

export default Events;