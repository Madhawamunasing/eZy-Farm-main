import React from 'react'
import './css/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='container-fluid footer p-5 '>
      <div class='row '>
        <div class='col'>
          <span>Ezy-Farm</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
            consectetur.
          </p>
        </div>
        <div class='col'>
          <ul>
            <span>Pages</span>
            <li>
              <Link to='/home'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to='/Fruit'>
                <a>Fruits</a>
              </Link>
            </li>
            <li>
              <Link to='/Vegetable'>
                <a>Vegetables</a>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <a>Help & contact</a>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <a>My ezy-farm</a>
              </Link>
            </li>
          </ul>
        </div>
        <div class='col'>
          <ul>
            <span>Policies</span>

            <li>
              <a href=''>Terms and Condition</a>
            </li>
            <li>
              <a href=''>Return Policy</a>
            </li>
            <li>
              <a href=''>Accessibity</a>
            </li>
            <li>
              <a href=''>Privacy</a>
            </li>
          </ul>
        </div>
        <div class='col'>
          <span>Our info</span>
          <p>
            + 88 018 4113 6251 <br /> info@cannabify.com <br /> Sidestate NSW
            4132, <br /> Australia
          </p>
        </div>
      </div>
      <hr />{' '}
    </div>
  )
}
