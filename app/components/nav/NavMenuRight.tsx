import React from 'react'
import {IoMdNotifications} from 'react-icons/io'
import {AiFillMessage} from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io'

const NavMenuRight  = () => {
   
  return (
    <div className='flex items-center space-x-5'>
        <IoMdNotifications className='text-[30px] text-[#767676]'/>
        <AiFillMessage className='text-[25px] text-[#767676]'/>
        
        <div className='flex text-white justify-center items-center bg-[#435661] w-7 h-7 rounded-[50%]'>
          h
        </div>

        <IoIosArrowDown className='text-[#767676]'/>
    </div>
  )
}

export default NavMenuRight