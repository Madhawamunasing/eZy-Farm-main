import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import ListingItem from './ListingItems'
import axios from 'axios'
import Footer from './Footer'
import './css/listning.css'
export default class Orders extends Component {
  state = {
    items: [],
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/getAllOrders').then((response) => {
      console.log(response.data)
      // this.setState({ items: response.data.item })
    })
  }
  render() {
    return (
      <div>
        <div className='main-listning-container'>
          <ul>
            {this.state.items.map((item) => (
              <ListingItem itemDetails={item} />
            ))}
          </ul>
          <h2>Nothing to display</h2>
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}
