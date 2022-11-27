import React from 'react'
import styles from '../../style';
import { mainMembers } from '../../constants';
import MemberCard from '../MemberCard';

const AboutUs = () => {
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
      <section id={'history'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
              History Of FOSS-CIT
          </h1>
          <p className={`${styles.paragraph} mt-5 text-justify`}>
              Fugiat quis nostrud eiusmod nostrud enim in. Do eiusmod in sunt consequat elit nostrud do Lorem. Ullamco eu cupidatat sint aliquip veniam minim.
              Qui incididunt sunt eu excepteur nostrud deserunt do. Occaecat minim culpa ea veniam laborum do id sit officia dolore eiusmod. Voluptate culpa dolor proident pariatur aliqua elit minim nulla occaecat. Nostrud minim sunt irure elit adipisicing pariatur velit pariatur. Id elit Lorem quis officia laboris ad non voluptate. Duis dolor laboris sint excepteur fugiat labore est id sit minim sunt incididunt ipsum ullamco. Quis enim amet cupidatat adipisicing enim qui commodo reprehenderit do.
              Aliquip aute Lorem labore nulla tempor exercitation. Nulla incididunt amet in do voluptate sit culpa cupidatat nostrud et ad sit ex ullamco. Aliqua qui consectetur laborum sunt deserunt occaecat duis mollit non culpa. Enim magna eiusmod et aliquip anim anim minim dolore.
          </p>
      </section>
      <section id={'details'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
              Details of FOSS-CIT
          </h1>
          <p className={`${styles.paragraph} mt-5 text-justify`}>
              Fugiat quis nostrud eiusmod nostrud enim in. Do eiusmod in sunt consequat elit nostrud do Lorem. Ullamco eu cupidatat sint aliquip veniam minim.
              Qui incididunt sunt eu excepteur nostrud deserunt do. Occaecat minim culpa ea veniam laborum do id sit officia dolore eiusmod. Voluptate culpa dolor proident pariatur aliqua elit minim nulla occaecat. Nostrud minim sunt irure elit adipisicing pariatur velit pariatur. Id elit Lorem quis officia laboris ad non voluptate. Duis dolor laboris sint excepteur fugiat labore est id sit minim sunt incididunt ipsum ullamco. Quis enim amet cupidatat adipisicing enim qui commodo reprehenderit do.
              Aliquip aute Lorem labore nulla tempor exercitation. Nulla incididunt amet in do voluptate sit culpa cupidatat nostrud et ad sit ex ullamco. Aliqua qui consectetur laborum sunt deserunt occaecat duis mollit non culpa. Enim magna eiusmod et aliquip anim anim minim dolore.
          </p>
      </section>
      <section id={'members'} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
          Our Members
        </h1>
        <div className="flex flex-wrap justify-center w-full z-[1]">
          {mainMembers.map((card) => <MemberCard key={card.sno} {...card} />)}
        </div>
      </section>
    </div>
  )
}

export default AboutUs;