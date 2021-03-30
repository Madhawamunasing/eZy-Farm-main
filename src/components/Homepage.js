import React from 'react'
import Offer from './Offer'
import Explore from './Explore'
import CarouselComponent from './CarouselComponent'
import ItemList from './Itemlist'
import Footer from './Footer'
import './css/homepage.css'

export default function homepage() {
  return (
    <div>
      <div className='carousel-container'>
        <CarouselComponent />
      </div>
      <div className='main-container-body'>
        <ItemList />
        <ItemList />
        <Offer className='offer-container' />
        <Explore />
      </div>
      <Footer />
    </div>
  )
}
