import React from 'react'
import { Context } from 'vm'

type Props = {}

export default function page({params, searchparams} :Context) {
       
  return (
    <div>{  JSON.stringify(params)}</div>
  )
}