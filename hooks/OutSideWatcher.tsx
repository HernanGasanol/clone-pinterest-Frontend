import { log } from 'console';
import React, { useEffect, useRef ,useState,useMemo} from 'react'



/*
const OutSideWatcher = (init:boolean,handle:Function) => {
 
    const [visible,setVisible]=useState<boolean>(init);
    
    const ref=useRef(null);

    

    useEffect(()=>{
      document.addEventListener('click', handle,true);
 
         return ()=> {
           document.removeEventListener('click',handle)
         }
 
      },[ref,ref2])
 


    const handleClickOutside =(e:any)=>{
      if( ref.current && !ref.current.contains(e.target)) setVisible(e=>!e)
    }

  
    return {visible,setVisible,ref}
}

export default OutSideWatcher

*/

export const SwitchCard=()=>{
 
 
const [state, setState]=useState({
  stateOne:false,
  stateTwo:false
 });

 const refOne=useRef(null);
 const refTwo=useRef(null);

 useEffect(()=>{
  document.addEventListener('click', handle,true);
 
  return ()=> {
    document.removeEventListener('click',handle)
  }

 },[refOne,refTwo]);


const handle=(e:any)=>{

  if( refOne.current && !refOne.current.contains(e.target)){
    
    
  
    setState({...state, stateOne:false})

  } 
   

  if(refTwo.current && !refTwo.current.contains(e.target)) {
    console.log("two") 
 
    
   setState({...state, stateTwo:false})

  }
  


  
}

 return {state , setState , refOne,refTwo}






}