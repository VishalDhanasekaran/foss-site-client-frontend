import React from 'react'
import styles from '../../style';

const Error = () => {
  return (
    <div className={`flex flex-col ${styles.paddingY}`}>
        <h2 className={`${styles.heading2} text-center text-gradient`}>
            Invalid url
        </h2>
    </div>
  )
}

export default Error;