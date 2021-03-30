import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './css/homepage.css'
import { Link } from 'react-router-dom'
export default function CarouselComponent() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100 '
            src='http://amigosthemes.com/frutella/frutella-light/assets/images/content/720x720/image-5.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <p className='carousel-discription'>
              Special season offers <br />
              <span>50%</span> OFF
            </p>
            <Link to='/fruit'>
              <button className='carousel-button'>Shop Now</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='http://amigosthemes.com/frutella/frutella-light/assets/images/content/720x720/image-11.jpg'
            alt='Second slide'
          />

          <Carousel.Caption>
            <p className='carousel-discription'>
              Organic food <br />
              <span>Every Day</span>
            </p>
            <Link to='/vegetable'>
              <button className='carousel-button'>Shop Now</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='http://amigosthemes.com/frutella/frutella-light/assets/images/content/720x720/image-12.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p className='carousel-discription'>
              <span style={{ color: 'orange' }}> Signup today.</span> <br />{' '}
              Save on all products <br />
              <span style={{ color: 'red' }}>45%</span> OFF
            </p>
            <Link to='/signup'>
              <button className='carousel-button'>Shop Now</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
