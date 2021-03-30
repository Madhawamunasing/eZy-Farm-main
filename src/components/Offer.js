import React from 'react'
import '../components/css/offer.css'
import { Link } from 'react-router-dom'
export default function Offer() {
  return (
    <div className='container-fluid main-offer-container mr-5 ml-5'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='para'>
            <span className='offer-heading'>
              Get the item <br /> Before it's gone
            </span>
            <br />
            <span className='offer-discription mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, quasi.
            </span>{' '}
            <br />
            <Link to='/watchlist'>
              <button class='btn draw-border m-4'>Discover Watchlist</button>
            </Link>
          </div>
        </div>
        <div className='col-md-8 offer-image'>
          <img
            src='https://i.ebayimg.com/images/g/v5cAAOSw2TFfKDIp/s-l960.jpg'
            alt=''
            width='90%'
            height='120%'
          />
        </div>
      </div>
    </div>
  )
}
;<div className='container'>
  <div className='row'>
    <div className=' col-md-4'></div>
    <div className=' col-md-8'></div>
  </div>
</div>
