import React from 'react'
import { useEffect, useState } from 'react'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function Item({ match }) {
  useEffect(() => {
    fetchItem()
  }, [])

  const [cart, setCart] = useState([])

  const [item, setItem] = useState({
    images: {},
  })
  const [qty, setqty] = useState(0)
  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    )

    const item = await data.json()
    console.log('Item', item)
    setItem(item.data.item)
  }
  const decreaseqty = () => {
    if (qty > 0) {
      setqty(qty - 1)
    }
  }
  const availbleQty = 10 // get availble qty
  const increaseqty = () => {
    if (availbleQty > qty) {
      setqty(qty + 1)
    }
  }

  const addToCart = (item) => {
    console.log('Cart item', item)
    setCart([...cart, item])
    console.log('setCart' + cart)
  }
  return (
    <div>
      <div className=' d-flex flex-row flex-wrap  item-container p-5'>
        {/* <header>
          <button>{cart.length}</button>
        </header> */}
        <div className='image-container'>
          <img src={item.images.background} alt='' width='100%' />
        </div>

        <div className='item-description '>
          <h3>{item.name}</h3>
          <div className='star-container'>
            <FontAwesomeIcon className='star' icon={faStar} />
            <FontAwesomeIcon className='star' icon={faStar} />
            <FontAwesomeIcon className='star' icon={faStar} />
          </div>
          <span className='real-price'> ${item.cost} </span>
          <span className='price'>${item.cost}</span>
          <div className='input-qty'>
            <div className='minus' onClick={decreaseqty}>
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <input min='1' name='text' type='text' value={qty}></input>
            <div className='pluse' onClick={increaseqty}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <button
            onClick={() => addToCart(item)}
            className=' button-theme'
            type='submit'
          >
            add to cart
          </button>
          {/* <div className='sku'>SKU:{item.ratings.numberVotes}</div> */}
          <hr />
          <div className='discription'>
            {item.description} Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quam et veniam, eveniet, voluptatum beatae qui
            delectus ad est consectetur commodi, quisquam minus asperiores!
            Molestias, aliquam commodi veniam nam dicta consequuntur.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
