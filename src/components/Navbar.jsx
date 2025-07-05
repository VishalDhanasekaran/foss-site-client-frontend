import { useState } from 'react';
import { navLinks } from '../constants'

import { logo, menu, close, logo_optimized } from '../assets'
//import { UilUser } from '@iconscout/react-unicons'
import Cookies from 'js-cookie';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const pic = Cookies.get('pic')
    const email = Cookies.get('email')

    return (
        <nav className='fixed bg-zinc-800/40 backdrop-blur-md rounded-xl w-[90%] shadow-2xl flex justify-between items-center py-[.8rem] lg:py-[1rem] px-[1rem] lg:px-[4rem] top'>
            <a href='/' className='flex flex-row justify-center items-center'>
                <img src={logo_optimized} alt='FOSS-CIT Logo' className='w-16 h-16' />
                <span className='font-courier font-semibold text-3xl px-10'>FOSS CIT</span></a>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-courier font-normal cursor-pointer text-lg px-5 text-white hover:text-secondary`}>
                        <a href={`${nav.id}`} >
                            {nav.title}
                        </a>
                    </li>

                ))}
            </ul>
            <div className='sm:hidden flex justify-center items-center'>
                <img src={toggle ? close : menu} alt='menu' className='w-8 h-8 object-contain' onClick={() => setToggle((prev) => !prev)} />
                <div className={`${toggle ? 'left-0' : '-left-full'} fixed top-0 h-screen w-2/4 bg-gradient-to-tl from-white/10 to-[#2d270e] backdrop-blur-lg z-[15] p-6 ease-in-out duration-[500ms] object-contain`}>
                    <div className='flex flex-row p-10 justify-center items-center'>
                        <img src={logo_optimized} alt='FOSS-CIT Logo' className='w-16 h-16' />
                    </div>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-courier font-bold cursor-pointer text-lg p-3 text-white hover:text-secondary`}>
                                <a href={`${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;