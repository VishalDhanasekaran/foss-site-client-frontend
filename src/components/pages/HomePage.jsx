import React from 'react'
import { eventsList } from '../../constants';
import GetStarted from '../GetStarted';
import AnnounceCard from '../AnnounceCard';
import {linux,left_arrow,right_arrow } from '../../assets';
import styles from '../../style';

const HomePage = () => {

  return (
    <div>
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Free and <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Open Source</span>{" "}
            </h1>
            
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Software, CIT
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
            Nostrud cupidatat Lorem labore labore eu aliqua commodo ut eiusmod irure cillum laborum Lorem. Proident aliqua reprehenderit amet incididunt. Ex incididunt tempor anim esse nostrud eiusmod cupidatat. 
          </p>
          <div className="ss:flex hidden md:mr-4 mr-0 ml-[25%]">
            <GetStarted text={'Get Started'}/>
          </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={linux} alt="billing" className="w-[60%] h-[60%] relative z-[5] md:w-[100%] md:h-[100%]" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted text={'Get Started'}/>
        </div>
      </section>
      
      <section id={'upcomingevents'} className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[60.8px] leading-[75px] text-justify">
            Few Words About FOSS-CIT
          </h1>
          <p className={`${styles.paragraph} mt-5 text-justify`}>
                Fugiat quis nostrud eiusmod nostrud enim in. Do eiusmod in sunt consequat elit nostrud do Lorem. Ullamco eu cupidatat sint aliquip veniam minim.
                Qui incididunt sunt eu excepteur nostrud deserunt do. Occaecat minim culpa ea veniam laborum do id sit officia dolore eiusmod. Voluptate culpa dolor proident pariatur aliqua elit minim nulla occaecat. Nostrud minim sunt irure elit adipisicing pariatur velit pariatur. 
            </p>
        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
            Upcoming Events
          </h1>

          <div className='shadow-lg shadow-[#b0a854] w-full h-[17rem] overflow-x-hidden overflow-y-auto events-scroll'>
            {eventsList.map((item,index)=>(
              <a href={`/announcement/${item.name}`}>
                <div key={item.name} className={`flex flex-row w-full h-fit ${index === eventsList.length-1 ? 'border-b-0': 'border-b-2' }`} >
                  <div className='w-full text-center hover:scale-105 ease-in-out duration-300'>
                    <span className='text-2xl text-gradient'>{item.name}</span>
                    <div className='flex flex-row justify-between mx-10 text-xl py-5'>
                      <div>Date: {item.date}</div>
                      <div>Time: {item.time}</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <div className={`flex flex-col ${styles.paddingY}`}>
        <section id={'whoarewe'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
                Who are we...
            </h1>
            <p className={`${styles.paragraph} mt-5 text-justify`}>
                Fugiat quis nostrud eiusmod nostrud enim in. Do eiusmod in sunt consequat elit nostrud do Lorem. Ullamco eu cupidatat sint aliquip veniam minim.
                Qui incididunt sunt eu excepteur nostrud deserunt do. Occaecat minim culpa ea veniam laborum do id sit officia dolore eiusmod. Voluptate culpa dolor proident pariatur aliqua elit minim nulla occaecat. Nostrud minim sunt irure elit adipisicing pariatur velit pariatur. Id elit Lorem quis officia laboris ad non voluptate. Duis dolor laboris sint excepteur fugiat labore est id sit minim sunt incididunt ipsum ullamco. Quis enim amet cupidatat adipisicing enim qui commodo reprehenderit do.
                Aliquip aute Lorem labore nulla tempor exercitation. Nulla incididunt amet in do voluptate sit culpa cupidatat nostrud et ad sit ex ullamco. Aliqua qui consectetur laborum sunt deserunt occaecat duis mollit non culpa. Enim magna eiusmod et aliquip anim anim minim dolore.
            </p>
        </section>
        <section id={'whatwedo'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
                what we do...
            </h1>
            <p className={`${styles.paragraph} mt-5 text-justify`}>
                Fugiat quis nostrud eiusmod nostrud enim in. Do eiusmod in sunt consequat elit nostrud do Lorem. Ullamco eu cupidatat sint aliquip veniam minim.
                Qui incididunt sunt eu excepteur nostrud deserunt do. Occaecat minim culpa ea veniam laborum do id sit officia dolore eiusmod. Voluptate culpa dolor proident pariatur aliqua elit minim nulla occaecat. Nostrud minim sunt irure elit adipisicing pariatur velit pariatur. Id elit Lorem quis officia laboris ad non voluptate. Duis dolor laboris sint excepteur fugiat labore est id sit minim sunt incididunt ipsum ullamco. Quis enim amet cupidatat adipisicing enim qui commodo reprehenderit do.
                Aliquip aute Lorem labore nulla tempor exercitation. Nulla incididunt amet in do voluptate sit culpa cupidatat nostrud et ad sit ex ullamco. Aliqua qui consectetur laborum sunt deserunt occaecat duis mollit non culpa. Enim magna eiusmod et aliquip anim anim minim dolore.
            </p>
        </section>
        <section id={'achievements'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
                what we have achieved...
            </h1>
            <p className={`${styles.paragraph} mt-5 text-justify`}>
                Fugiat quis nostrud eiusmod nostrud enim in. Do eiusmod in sunt consequat elit nostrud do Lorem. Ullamco eu cupidatat sint aliquip veniam minim.
                Qui incididunt sunt eu excepteur nostrud deserunt do. Occaecat minim culpa ea veniam laborum do id sit officia dolore eiusmod. Voluptate culpa dolor proident pariatur aliqua elit minim nulla occaecat. Nostrud minim sunt irure elit adipisicing pariatur velit pariatur. Id elit Lorem quis officia laboris ad non voluptate. Duis dolor laboris sint excepteur fugiat labore est id sit minim sunt incididunt ipsum ullamco. Quis enim amet cupidatat adipisicing enim qui commodo reprehenderit do.
                Aliquip aute Lorem labore nulla tempor exercitation. Nulla incididunt amet in do voluptate sit culpa cupidatat nostrud et ad sit ex ullamco. Aliqua qui consectetur laborum sunt deserunt occaecat duis mollit non culpa. Enim magna eiusmod et aliquip anim anim minim dolore.
            </p>
        </section>
        <section id={'alumni'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
                Our alumni are at...
            </h1>
            <p className={`${styles.paragraph} mt-5 text-justify`}>
                Fugiat quis nostrud eiusmod nostrud enim in. Do eiusmod in sunt consequat elit nostrud do Lorem. Ullamco eu cupidatat sint aliquip veniam minim.
                Qui incididunt sunt eu excepteur nostrud deserunt do. Occaecat minim culpa ea veniam laborum do id sit officia dolore eiusmod. Voluptate culpa dolor proident pariatur aliqua elit minim nulla occaecat. Nostrud minim sunt irure elit adipisicing pariatur velit pariatur. Id elit Lorem quis officia laboris ad non voluptate. Duis dolor laboris sint excepteur fugiat labore est id sit minim sunt incididunt ipsum ullamco. Quis enim amet cupidatat adipisicing enim qui commodo reprehenderit do.
                Aliquip aute Lorem labore nulla tempor exercitation. Nulla incididunt amet in do voluptate sit culpa cupidatat nostrud et ad sit ex ullamco. Aliqua qui consectetur laborum sunt deserunt occaecat duis mollit non culpa. Enim magna eiusmod et aliquip anim anim minim dolore.
            </p>
        </section>
      </div>
    
    </div>
  )
}

export default HomePage;