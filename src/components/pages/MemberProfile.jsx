import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from '../../style';
import { membersList } from '../../constants';
import GetStarted from '../GetStarted';

const MemberProfile = () => {

    const memberId=useParams();
    
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
        
        <section id={'member'} className={`flex-1 ${styles.flexCenter} ${styles.paragraph} flex-col xl:px-0 sm:px-16 px-6`}>
            
            {membersList.map((item,index)=>
                <div key={item.id} className={`flex-1 ${styles.flexCenter} ${item.id==memberId.id? 'flex':'hidden'} flex-col xl:px-0 sm:px-16 px-6 font-poppins font-semibold ss:text-[22px] text-[15px] `}>
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] text-gradient my-4 animate-[zoomIn_0.75s_ease-in-out]">
                        {item.name}
                    </h1>
                    <div className={`${styles.flexCenter}`}>
                        <img src={item.photo} alt={item.name} className='shadow-lg shadow-[#b0a854] h-[20rem] w-[20rem] animate-[zoomIn_0.75s_ease-in-out]'/>
                    </div>
                    <div className={`${styles.flexCenter} flex flex-col my-7 leading-10 animate-[zoomIn_0.75s_ease-in-out]`}>
                        <div>Role: {item.role}</div>
                        <div>Department: {item.department}</div>
                        <div>Year: {item.year}</div>
                        <GetStarted text={'Linkedin'} link={item.linkedin}/>
                    </div>

                    

                </div>
                
            )}
        </section>
    </div>
  )
}

export default MemberProfile;