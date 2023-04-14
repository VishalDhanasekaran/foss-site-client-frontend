import {useState} from 'react';
import {navLinks} from '../constants'

import {logo,menu,close} from '../assets'
import { UilUser } from '@iconscout/react-unicons'
import Cookies from 'js-cookie';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const pic=Cookies.get('pic')
    const email=Cookies.get('email')

      return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='FOSS-CIT Logo' className='w-[70px] h-[70px]' />
        <span className='font-poppins font-semibold text-4xl mx-10'>FOSS CIT</span>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav,index)=>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] px-5 text-white hover:text-secondary`}>
                    <a href={`${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
                
            ))}
            {pic&&
                <img src={pic} alt={email} className='flex rounded-full h-10 w-10 m-5 cursor-pointer'/>
            }
            {!pic&&
                <UilUser className='flex h-10 w-10 m-5 cursor-pointer hover:fill-secondary'/>
            }
        </ul>
        <div className='sm:hidden flex justify-center items-center'>
            <img src={toggle? close : menu} alt='menu' className='w-[28px] h=[28px] object-contain' onClick={()=>setToggle((prev)=>!prev)} />
            <div className={`${toggle ? 'left-0':'-left-full'} fixed top-0 h-screen w-2/4 bg-gradient-to-tl from-white/10 to-[#2d270e] backdrop-blur-lg z-[15] p-6 ease-in-out duration-[500ms] object-contain`}>
                <div className='flex flex-row my-10 justify-center items-center'>
                    <img src={logo} alt='FOSS-CIT Logo' className='w-16 h-16' />
                </div>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navLinks.map((nav,index)=>(
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-lg ${index===navLinks.length-1? 'mb-0' : 'mb-4'} text-white hover:text-secondary my-3`}>
                            <a href={`${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                    {pic&&
                        <img src={pic} alt={email} className='flex rounded-full h-10 w-10 m-5  cursor-pointer'/>
                    }
                    {!pic&&
                        <UilUser className='flex h-10 w-10 m-5 cursor-pointer hover:fill-secondary'/>
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;