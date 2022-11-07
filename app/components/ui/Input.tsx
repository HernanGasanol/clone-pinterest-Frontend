import React, { ChangeEventHandler } from 'react'

type Props = {
    placeholder:string
    type:string
   className:string
   value?:value
   onChange?:ChangeEventHandler
   

}

type value= number | string | undefined

function Input({...props}: Props ) {
  
  
  
    return (
    <input {...props} />
  )
}

export default Input