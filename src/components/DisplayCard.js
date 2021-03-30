import React from 'react'
import './css/DisplayCard.css'
import { Link } from 'react-router-dom'

export default function DisplayCard(data) {
  console.log(data)

  return (
    <div className='container itemCard'>
      <img
        src={data.displayDetail.item.images.background}
        alt=''
        width='100%'
      />
      <p key={data.displayDetail.itemId}>
        <Link to={`/item/${data.displayDetail.itemId}`}>
          {data.displayDetail.item.name}
        </Link>
      </p>
    </div>
  )
}
