import React, { useState, useEffect } from 'react'

import { Navbar, Footer, HomePage, AboutUs, Members, Contact, Error, Events, Login, Event, RedirectToOpenCrew } from './components';
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';

import { ToastContainer, toast as t } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const customStyle = {
    backgroundColor: "#fae95e"
  };

  const handleEvent = () => {
    var toast = Cookies.get('toast');
    Cookies.remove('toast');
    if (toast === 'true') {
      t.info('There is an Upcoming Event!\nClick here to learn more!', {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        progressStyle: customStyle,
      });
    }
  }
  /*
    useEffect(() => {
      const cookie=Cookies.get("email");
      if(cookie)
      {
        setLoggedIn(true);
      }
      const timeoutId = setTimeout(() => {
        setShowOverlay(true);
      }, 2500);
      if(loggedIn) {
        return () => {
          clearTimeout(timeoutId);
        }
      }
    }, []);*/

  useEffect(() => {
    const timeoutEvent = setTimeout(() => {
      handleEvent();
    }, 4000);
    return () => {
      clearTimeout(timeoutEvent);
    }
  }, [])

  const handleToastClick = () => {
    window.open(`/events/${Cookies.get("event_id")}`, '_self', 'noopener,norefferer');
  }


  const RedirectToBlogs = () => {

    return (
      <div className={`flex flex-col py-10`}>
        <h2 className={`font-courier font-semibold text-5xl text-gradient w-full text-center text-gradient`}>
          Coming Soon!
        </h2>
      </div>
    );
  }


  return (
    <>
      <div className=' bg-neutral-900 w-full overflow-hidden'>
        <div onClick={handleToastClick}>
          <ToastContainer />
        </div>
        <div className={`px-10 flex justify-center items-center fixed w-full z-[14] bg-header animate-[fadeInUp_0.5s_ease-in-out]`}>
          <div className={` w-full text-white `}>
            <Navbar loggedIn={loggedIn} />
          </div>
        </div>

        <div className={`mt-24`}>
          <div className={`w-full text-white`}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/*' element={<Error/>}/>
              <Route path='/about' element={<AboutUs />} />
              <Route path='/members' element={<Members />} />
              <Route path='/events/:id' element={<Event />} />
              <Route path='/events' element={<Events />} /> 
              <Route path='/contact' element={<Contact />} />
              <Route path='/blogs' element={<RedirectToBlogs/>}/>
              <Route path='/join' element={<RedirectToOpenCrew/>} />
            </Routes>
          </div>
        </div>

        <div className={`bg-header  flex justify-center items-center mt-5 bottom-0`} data-aos="fade-up" data-aos-duration='1000'>
          <div className={`w-full text-white`}>
            <Footer />
          </div>
        </div>
      </div>
      {/*showOverlay && !loggedIn &&<div className='fixed bg-opacity-80 z-20 overflow-hidden bg-black top-0 bottom-0 right-0 left-0'>
      <Login handler={setShowOverlay} logHandler={setLoggedIn}/>
    </div>*/}
    </>
  )
}
export default App;