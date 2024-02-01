import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-5 bg-gray-950 text-white flex justify-between'> 
      <h1 className='text-2xl font-bold ml-10'>MovieShow</h1>
      <div className='p-2 mr-36 font-bold hover:text-blue-200'>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default Header
