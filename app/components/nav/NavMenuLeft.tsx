'use client'
import Link from 'next/link';
import React, { useEffect, useRef , useState} from 'react'
import {useSelector} from 'react-redux'
import {SwitchCard} from '../../../hooks/OutSideWatcher'


const NavMenuLeft = () => {

const { state, refOne, refTwo, setState } = SwitchCard();

const handleClickCreate = (e: EventTarget) => {
  setState({ ...state, stateTwo: !state.stateTwo });
};

const handleClickInicio = () => {
  setState({ ...state, stateOne: !state.stateOne });
};

  return (
    <div className='flex items-center '>
      
      
      
      {/* menu inicio*/ }
      
      <div className='text-black text-md font-medium ' id='inicio' onClick={handleClickInicio}>
            
           <p className={`${state.stateOne && 'bg-[#111111] text-white py-5 px-4'}  py-3 px-4 rounded-full`}> Inicio</p>
            {
              state.stateOne && (
                 <div ref={refOne} className='flex lg:hidden  bg-white  px-2  py-2 rounded-2xl shadow-lg border-black  justify-center gap-2 flex-col absolute  top-[5rem] left-10  w-[11rem] '>
                      <Link href={"/pin-builder"} className={`hover:bg-[#e9e9e9] p-2 `}> crear una Idea pin</Link>
                      <Link href={"/pin-builder"}className='hover:bg-[#e9e9e9] p-2'> crear un pin</Link>
                 
                 </div>
              )}
      
      
      </div>

      {/* menu today*/ }
     
      <div className='hidden lg:inline-block text-black text-md font-medium	'>
      
        <p  className={`${ 'bg-[#111111] text-white py-5 px-4'}  py-3 px-4 rounded-full`} >Hoy</p> 
        
      </div>

     
      {/* menu crear*/ }
   
       <div  onClick={handleClickCreate}  className={`relative hidden lg:inline-block text-black text-md font-medium 	`}>
           
            <p className={`${state.stateTwo && 'bg-[#111111] text-white py-5 px-4'}  py-3 px-4 rounded-full`}>crear</p>
            {
              state.stateTwo && (
                 <div ref={refTwo} className='flex px-2  py-2 rounded-2xl shadow-lg border-black  justify-center gap-2 flex-col absolute right-[-5rem]  bg-white top-[3.5rem]  w-[11rem]  '>
                      <Link href={"/pin-builder"}className={`hover:bg-[#e9e9e9] p-2 rounded-md`}> crear una Idea pin</Link>
                      <Link href={"/pin-builder"}className='hover:bg-[#e9e9e9] p-2 rounded-md'>crear un pin</Link>
                 
                 </div>
              )}
        </div>
    
    </div>
  );
}

export default NavMenuLeft