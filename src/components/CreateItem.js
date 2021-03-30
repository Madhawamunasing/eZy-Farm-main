import React from 'react'
import './css/form.css'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import Footer from './Footer'
import { Component } from 'react'
import axios from 'axios'
export default class CreateItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seller_id: '',
      name: '',
      price: '',
      qty: '',
      description: '',
      category: '',
    }
  }
  changeItemName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }
  changeItemPrice = (event) => {
    this.setState({
      price: event.target.value,
    })
  }
  changeItemQty = (event) => {
    this.setState({
      qty: event.target.value,
    })
  }
  changeItemDisription = (event) => {
    this.setState({
      description: event.target.value,
    })
  }
  changeItemCatergary = (event) => {
    this.setState({
      category: event.target.value,
    })
  }
  onsubmit = (event) => {
    event.preventDefault()

    const registered = {
      name: this.state.name,
      price: this.state.price,
      qty: this.state.qty,
      description: this.state.description,
      category: this.state.category,
      sellerId: '123',
    }
    console.log(registered)
    axios
      .post('http://localhost:5000/api/registerItem', registered)
      .then((response) => console.log(response))

    this.setState({
      name: '',
      price: '',
      qty: '',
      description: '',
      category: '',
      seller_id: '',
    })
  }

  render() {
    return (
      <div>
        <div className='add-item-form '>
          <Form onSubmit={this.onsubmit}>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='item name'
                aria-describedby='basic-addon2'
                value={this.state.name}
                onChange={this.changeItemName}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <select
                name=''
                id=''
                value={this.state.category}
                onChange={this.changeItemCatergary}
                className=' select-catergary'
                required='true'
              >
                <option value='' disabled selected>
                  food catergary
                </option>
                <option value='Vegetables'>Vegetables</option>
                <option value='Fruits'>Fruits</option>
              </select>
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                aria-label='Amount (to the nearest dollar)'
                placeholder='price'
                value={this.state.price}
                onChange={this.changeItemPrice}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='qty'
                type='number'
                min='0'
                value={this.state.qty}
                onChange={this.changeItemQty}
                required='true'
              />
            </InputGroup>
            <InputGroup>
              <FormControl
                as='textarea'
                aria-label='discription'
                placeholder='discription'
                value={this.state.description}
                onChange={this.changeItemDisription}
                required='true'
              />
            </InputGroup>
            <div className='btn-group'>
              <Button
                variant='outline-primary'
                className='mt-5'
                type='submit'
                value='submit'
              >
                Add to listing
              </Button>{' '}
            </div>
          </Form>
        </div>
        <Footer />
      </div>
    )
  }
}
