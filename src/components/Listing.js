import React from 'react'
import { Link } from 'react-router-dom'
import './css/listning.css'
import ListingItem from './ListingItems'
import axios from 'axios'

import { Component } from 'react'
import Footer from './Footer'
export default class Listing extends Component {
  state = {
    items: [],
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/getAllItems').then((response) => {
      console.log(response.data.item)
      this.setState({ items: response.data.item })
    })
  }
  render() {
    return (
      <div>
        <div className='main-listning-container'>
          <ul>
            <Link to='/createitem'>
              <button type='button' class='btn btn-outline-primary'>
                <a>Add a new item</a>
              </button>
            </Link>
            {this.state.items.map((item) => (
              // <li>{item.name}</li>
              <ListingItem itemDetails={item} />
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}
