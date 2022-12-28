import React from 'react'
import styles from './style';

import { Navbar,Footer,HomePage, AboutUs, Members, Contact,Error, Events,Login,Register,Event } from './components'; 
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div className='bg-primary  w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-header animate-[fadeInUp_0.5s_ease-in-out]`}>
      <div className={`${styles.boxWidth} text-white`}>
        <Navbar/>
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-white`}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/members' element={<Members/>}/>
          <Route path='/events/:id' element={<Event/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
    </div>

    <div className={`bg-header ${styles.paddingX} ${styles.flexStart}`} data-aos="fade-up" data-aos-duration='1000'>
      <div className={`${styles.boxWidth} text-white`}>
        <Footer/>
      </div>
    </div>

  </div>
)

export default App;