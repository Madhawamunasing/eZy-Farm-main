import React from 'react'
import './css/listingItem.css'

export default function ListingItems(data) {
  const item = data.itemDetails
  console.log(item)
  return (
    <div className='d-flex flex-row flex-wrap   listing-item'>
      <div>
        <img
          src='https://i.ebayimg.com/images/g/-1UAAOSwzH9f4xc5/s-l200.jpg'
          alt=''
        />
      </div>
      <div className='listing-info'>
        <table>
          <tr>
            <th>
              <span>Categary </span>
            </th>
            <td>:{item.category}</td>
          </tr>
          <tr>
            <th>
              <span>Name </span>
            </th>
            <td>:{item.name}</td>
          </tr>
          <tr>
            <th>
              <span>Qty </span>
            </th>
            <td>:{item.qty}</td>
          </tr>
          <tr>
            <th>
              <span>Price </span>
            </th>
            <td>:Rs.{item.price.$numberDecimal}</td>
          </tr>
          <tr>
            <th>
              <span>Description</span>
            </th>
            <td>:{item.description}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
