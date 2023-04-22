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
        <a href='/' className='flex flex-row justify-center items-center'><img src={logo} alt='FOSS-CIT Logo' className='w-16 h-16'/>
        <span className='font-lobster font-semibold text-3xl px-10'>FOSS CIT</span></a>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav,index)=>(
                <li key={nav.id} className={`font-lobster font-normal cursor-pointer text-lg px-5 text-white hover:text-secondary`}>
                    <a href={`${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
                
            ))}
            {pic&&
                <img src={pic} alt={email} className='flex rounded-full h-10 w-10  cursor-pointer'/>
            }
            {!pic&&
                <UilUser className='flex h-10 w-10  cursor-pointer hover:fill-secondary'/>
            }
        </ul>
        <div className='sm:hidden flex justify-center items-center'>
            <img src={toggle? close : menu} alt='menu' className='w-8 h-8 object-contain' onClick={()=>setToggle((prev)=>!prev)} />
            <div className={`${toggle ? 'left-0':'-left-full'} fixed top-0 h-screen w-2/4 bg-gradient-to-tl from-white/10 to-[#2d270e] backdrop-blur-lg z-[15] p-6 ease-in-out duration-[500ms] object-contain`}>
                <div className='flex flex-row p-10 justify-center items-center'>
                    <img src={logo} alt='FOSS-CIT Logo' className='w-16 h-16' />
                </div>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navLinks.map((nav,index)=>(
                        <li key={nav.id} className={`font-lobster font-normal cursor-pointer text-lg p-3 text-white hover:text-secondary`}>
                            <a href={`${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                    {pic&&
                        <img src={pic} alt={email} className='flex rounded-full h-10 w-10   cursor-pointer'/>
                    }
                    {!pic&&
                        <UilUser className='flex h-10 w-10  cursor-pointer hover:fill-secondary'/>
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;