import React from 'react'
import { Link } from 'react-router-dom'
import './css/homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  return (
    <div>
      <div className='nav-bar'>
        <nav className='second-nav'>
          <a href=''>hi vickey</a>
          <Link to='/home'>
            <a>Home</a>
          </Link>
          <Link to='/vegetable'>
            <a>Vegetables</a>
          </Link>
          <Link to='/fruit'>
            <a>Fruits</a>
          </Link>
          <Link to='/seller'>
            <a>Seller</a>
          </Link>

          <Link to='/helpContact'>
            <a>help & contact</a>
          </Link>

          <Link to='/myshop'>
            <a>myEzy shop</a>
          </Link>

          <Link to='/watchlist'>
            <a>
              <FontAwesomeIcon className='cartIcon' icon={faCartPlus} />
            </a>
          </Link>
        </nav>
        <div class='input-group mb-3 search-bar'>
          <input
            type='text'
            class='form-control'
            placeholder='Search for anything'
            aria-describedby='basic-addon2'
          ></input>
          <div class='input-group-append'>
            <button class='btn btn-outline-secondary' type='button'>
              Search
            </button>
          </div>
        </div>
        <div className='login-container'>
          <Link to='/signup'>
            <a>Signup</a>
          </Link>
          <Link to='/login'>
            <a>Login</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
