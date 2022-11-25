import React from 'react'
import styles from './style';

import { Navbar,Footer,HomePage } from './components'; 
const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} text-white`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-white`}>
        <HomePage/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-white`}>
        <Footer/>
      </div>
    </div>

  </div>
)

export default App;