import React from 'react'
import { useEffect, useState } from 'react'
import DisplayCard from './DisplayCard'
import './css/vegetable.css'
import Footer from './Footer'

export default function Fruit() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/store/get')
    const items = await data.json()
    // console.log(items.data)
    setItems(items.data)
  }
  return (
    <div>
      <div className='d-flex flex-row flex-wrap justify-content-center vegetable-main-container '>
        {items.map((item) => (
          <div className='item-display'>
            <DisplayCard displayDetail={item} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
