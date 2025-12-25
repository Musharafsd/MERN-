import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <Link to="/">Menu</Link>
        <Link to="/add">Add Items</Link>
    </div>
  )
}

export default Nav