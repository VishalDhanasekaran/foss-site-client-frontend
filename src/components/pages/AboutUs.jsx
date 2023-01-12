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
            Fugiat quis nostrud eiusmod nostrud enim in. Do eiusmod in sunt consequat elit nostrud do Lorem. Ullamco eu cupidatat sint aliquip veniam minim.
            Qui incididunt sunt eu excepteur nostrud deserunt do. Occaecat minim culpa ea veniam laborum do id sit officia dolore eiusmod. Voluptate culpa dolor proident pariatur aliqua elit minim nulla occaecat. Nostrud minim sunt irure elit adipisicing pariatur velit pariatur. Id elit Lorem quis officia laboris ad non voluptate. Duis dolor laboris sint excepteur fugiat labore est id sit minim sunt incididunt ipsum ullamco. Quis enim amet cupidatat adipisicing enim qui commodo reprehenderit do.
            Aliquip aute Lorem labore nulla tempor exercitation. Nulla incididunt amet in do voluptate sit culpa cupidatat nostrud et ad sit ex ullamco. Aliqua qui consectetur laborum sunt deserunt occaecat duis mollit non culpa. Enim magna eiusmod et aliquip anim anim minim dolore.
        </p>
      </section>
      

      <section id={'founders'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
          Founders
        </h1>
        <div className='w-full'>
          {founders.map((user)=>(
            <FounderCard key={user.id} {...user}/>
          ))}
        </div>
      </section>

      <section id={'categories'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `} data-aos="fade-up" data-aos-duration='2000'>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
          Categories of Events
        </h1>
        <p className={`${styles.paragraph} mt-5 text-justify`}>
            <ul>
              <li>Category-1</li>
              <li>Category-1</li>
              <li>Category-1</li>
              <li>Category-1</li>
            </ul>
        </p>
      </section>
      
      <section id={'community'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 mt-4 `} data-aos="fade-up" data-aos-duration='2000'>
        <h2 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
          Join Our Community
        </h2>
        <GetStarted text={'Telegram'}/>
      </section>
    </div>
  )
}

export default AboutUs;