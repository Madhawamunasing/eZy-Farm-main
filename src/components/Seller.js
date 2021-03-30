import React from 'react'
import SellerNav from './SellerNav'
import Footer from './Footer'
import './css/seller.css'
export default function Seller() {
  return (
    <div className='main-seller-container'>
      <div className='container-fluid p-2 main-seller-container'>
        <div className='nav-container '>
          <SellerNav />
        </div>
        <div className='info-container'>
          <div>Nothing to display</div>
        </div>
      </div>
    </div>
  )
}
