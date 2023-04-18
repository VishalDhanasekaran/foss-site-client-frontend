import React,{useState,useEffect} from 'react'

import { Navbar,Footer,HomePage, AboutUs, Members, Contact,Error, Events,Login,Event } from './components'; 
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';



const App = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [loggedIn,setLoggedIn] = useState(false);

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
    return () => clearTimeout(timeoutId);}
  }, []);



  return (
  <>
    <div className=' bg-neutral-900 w-full overflow-hidden'>
      <div className={`px-10 flex justify-center items-center fixed w-full z-[14] bg-header animate-[fadeInUp_0.5s_ease-in-out]`}>
        <div className={` w-full text-white `}>
          <Navbar loggedIn={loggedIn}/>
        </div>
      </div>

      <div className={`mt-24`}>
        <div className={`w-full text-white`}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/members' element={<Members/>}/>
            <Route path='/events/:id' element={<Event/>}/>
            <Route path='/events' element={<Events/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </div>

      <div className={`bg-header  flex justify-center items-center mt-5`} data-aos="fade-up" data-aos-duration='1000'>
        <div className={`w-full text-white`}>
          <Footer/>
        </div>
      </div>
    </div>
    {showOverlay && !loggedIn &&<div className='fixed bg-opacity-80 z-20 overflow-hidden bg-black top-0 bottom-0 right-0 left-0'>
      <Login handler={setShowOverlay} logHandler={setLoggedIn}/>
    </div>}
  </>
)
}
export default App;