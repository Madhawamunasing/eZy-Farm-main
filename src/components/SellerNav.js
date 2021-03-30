import React from 'react'
import { Link } from 'react-router-dom'
import './css/sellernav.css'

export default function SellerNav() {
  return (
    <div>
      <nav className='seller-nav'>
        <span className='title'>Seller Hub</span> <br />
        <span>
          <Link to='/overview'>
            <a>Overview</a>
          </Link>
        </span>
        <br />
        <span>
          <Link to='/orders'>
            <a>Orders</a>
          </Link>
        </span>
        <br />
        <span>
          <Link to='/listning'>
            <a>Listning</a>
          </Link>
        </span>
        <br />
      </nav>
    </div>
  )
}
