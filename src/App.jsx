import React,{useState,useEffect} from 'react'
import styles from './style';

import { Navbar,Footer,HomePage, AboutUs, Members, Contact,Error, Events,Login,Register,Event } from './components'; 
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

import { G_AUTH } from './constants';


const App = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [loggedIn,setLoggedIn] = useState(false);
  const [user,setUser] = useState(null);
  // console.log(showOverlay);

  useEffect(() => {
    const cookie=Cookies.get("email");
    // console.log(cookie);
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

  const getUser = async () => {
		try {
			const url = `${G_AUTH}/auth/login/success`;
		  await axios.get(url, { withCredentials: true })
      .then((res)=>{
        console.log(res.data.user);
        Cookies.set('email',res.data.user.email[0].value);
      });
		} catch (err) {
			console.log(err);
		}
	};
  useEffect(() => {
		getUser();
	}, []);

  return (
  <>
    <div className=' bg-neutral-900 w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} fixed w-full z-[14] bg-header animate-[fadeInUp_0.5s_ease-in-out]`}>
        <div className={`${styles.boxWidth} text-white `}>
          <Navbar/>
        </div>
      </div>

      <div className={`${styles.flexStart} mt-32`}>
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
            {/* <Route path='/login' element={<Login/>}/> */}
            {/* <Route path='/register' element={<Register/>}/> */}
          </Routes>
        </div>
      </div>

      <div className={`bg-header ${styles.paddingX} ${styles.flexStart} mt-5`} data-aos="fade-up" data-aos-duration='1000'>
        <div className={`${styles.boxWidth} text-white`}>
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