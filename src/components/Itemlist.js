import { useEffect, useState } from 'react'
import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ViewCard from './ViewCard'
import './css/homepage.css'
import './css/viewCard.css'
import DisplayCard from './DisplayCard'
import { Link } from 'react-router-dom'

export default function Itemlist() {
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
      <div className='recent-watch'>
        <div className='container-fluid'>
          <p>
            Your Recently Viewed Items.
            <Link to='/vegetable'>
              <a>See all</a> <ArrowForwardIcon className='arrow-icon' />
            </Link>
          </p>
          <div className='d-flex flex-row flex-wrap justify-content-center'>
            {items.map((item, i) => (
              <div className='item-display'>
                <ViewCard displayDetail={item} id={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
