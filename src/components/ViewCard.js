import React from 'react'
import './css/viewCard.css'
import { Link } from 'react-router-dom'

export default function ViewCard(data) {
  if (data.id > 4) {
    return null
  } else {
    return (
      <div>
        <Link to={`/item/${data.displayDetail.itemId}`}>
          <div className='main-container '>
            <img
              src={data.displayDetail.item.images.background}
              alt=''
              width='100%'
            />
            <p key={data.displayDetail.itemId}>
              <a> {data.displayDetail.item.name}</a>
            </p>
          </div>
        </Link>
      </div>
    )
  }
}
