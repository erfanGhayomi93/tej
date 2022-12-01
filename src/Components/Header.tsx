import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='m-2'>
        <Link className='mx-2 bg-slate-500 p-1 text-white' to={"/"}>home</Link>
        <Link className='mx-2 bg-slate-500 p-1 text-white' to={"/About"}>about</Link>
        <Link className='mx-2 bg-slate-500 p-1 text-white' to={"/Login"}>login</Link>
    </div>
  )
}
