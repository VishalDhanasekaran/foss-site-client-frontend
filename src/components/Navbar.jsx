import {useState} from 'react';
import {navLinks} from '../constants'

import {logo,menu,close} from '../assets'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt='FOSS-CIT Logo' className='w-[80px] h-[75px]' />
        <span className='font-poppins font-semibold text-4xl mx-10'>FOSS CIT</span>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav,index)=>(
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1? 'mr-0' : 'mr-10'} text-white hover:text-secondary`}>
                    <a href={`./${nav.id}`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle? close : menu} alt='menu' className='w-[28px] h=[28px] object-contain' onClick={()=>setToggle((prev)=>!prev)} />
            <div className={`${toggle ? 'flex':'hidden'} p-6 bg-[#4d4a3d] absolute z-10 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    {navLinks.map((nav,index)=>(
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index===navLinks.length-1? 'mb-0' : 'mb-4'} text-white hover:text-secondary`}>
                            <a href={`./${nav.id}`}>
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