import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div >
      <div>
        <Link to='/' className='nav'>Home</Link>
      </div>
      <div>
        <Link to='/new' className='nav'>Create Your Own Agent</Link>
      </div>
    </div>
  )
}
