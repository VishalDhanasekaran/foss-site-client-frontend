import React from 'react'
import styles from '../../style';
import GetStarted from '../GetStarted';
import { founders } from '../../constants';
import FounderCard from '../FounderCard';

const AboutUs = () => {
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
      <section id={'history'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-[fadeInDown_1s_ease-in-out]`}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className={`${styles.heading2} text-center text-gradient`}>
            About FOSS CIT
          </h2>
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            History Of FOSS-CIT
        </h1>
        <p className={`${styles.paragraph} mt-5 text-justify`}>
        Our college's FOSS club was founded with the intention of introducing students to the world of open-source software, where they can learn and create new software. 
        The only pupils who will actually benefit from such a group are those who actively participate in it. Indirectly, the college gains from these initiatives since they make our students' talents known to prospective employers.
        </p>
      </section>
      

      <section id={'founders'} className={`flex-1 ${styles.flexStart} items-center justify-center sm:flex-row flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <div className='flex flex-col sm:w-1/3'>
          <h1 className="flex-1 font-poppins text-gradient font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            Initiators Of <br/> <span className='text-[60px]'>FOSS CIT</span>
          </h1>
          <p className={`${styles.paragraph} mt-5 text-justify`}>
            Dhileepan Thangamanimaran, Sai Adarsh, and Sibi Bose launched FOSS in 2018 while they were second-year students studying software systems at the Coimbatore Institute of Technology in Coimbatore.
          </p>
        </div>
        <div className=' flex flex-wrap w-2/3 gap-10 justify-center items-center'>
          {founders.map((user)=>(
            <FounderCard key={user.id} {...user}/>
          ))}
        </div>
      </section>
      
      <section id={'community'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-4 `} data-aos="fade-up" data-aos-duration='2000'>
        <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
          Join Our Community
        </h2>
        <GetStarted text={'LinkedIn'} link={'https://www.linkedin.com/company/foss-cit/'}/>
      </section>
    </div>
  )
}

export default AboutUs;