import Image from 'next/image'
import React from "react";
import NavInput from './NavInput';
import NavMenuLeft from './NavMenuLeft';
import NavMenuRight from "./NavMenuRight";


const Nav = () => {
  return (
    <nav className="flex sticky top-0 bg-white shadow-sm z-40 w-full justify-center px-4 items-center py-4 gap-2">
     
      <div className="flex space-x-4 mr-4  items-center">
        <div className="w-7 min-w-6 ">
          <Image
            src={"https://cdn.worldvectorlogo.com/logos/pinterest-1.svg"}
            alt=""
            layout="responsive"
            width="100%"
            height="100%"
          />
        </div>
        <NavMenuLeft />
      </div>

      <NavInput />

      <NavMenuRight />
      
   
    </nav>
 
 );
};

export default Nav;