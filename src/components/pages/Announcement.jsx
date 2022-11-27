import React from 'react'
import styles from '../../style'

const Announcement = () => {
  return (
    <div className={`flex flex-col ${styles.paddingY} h-screen`}>
      <h1 className="flex-1 font-poppins text-center font-semibold ss:text-[52px] text-[32px] text-white ss:leading-[100.8px] leading-[75px]">
          Announcements
      </h1>
    </div>

  )
}

export default Announcement