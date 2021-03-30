import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import axios from 'axios'
import React, { Component } from 'react'
import './css/signup.css'
export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      password: '',
      rpassword: '',
      nic: '',
      gender: '',
      address: '',
      city: '',
      province: '',
      email: '',
      contactNo: '',
    }
  }
  changeFname = (event) => {
    this.setState({
      fname: event.target.value,
    })
  }
  changeLname = (event) => {
    this.setState({
      lname: event.target.value,
    })
  }
  changePassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }
  changeRpassword = (event) => {
    this.setState({
      rpassword: event.target.value,
    })
  }
  changeNIC = (event) => {
    this.setState({
      nic: event.target.value,
    })
  }
  changeGender = (event) => {
    this.setState({
      gender: event.target.value,
    })
  }
  changeAddress = (event) => {
    this.setState({
      address: event.target.value,
    })
  }
  changeCity = (event) => {
    this.setState({
      city: event.target.value,
    })
  }
  changeProvince = (event) => {
    this.setState({
      province: event.target.value,
    })
  }
  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }
  changeContactNo = (event) => {
    this.setState({
      contactNo: event.target.value,
    })
  }
  onsubmit = (event) => {
    event.preventDefault()
    if (this.state.password === this.state.rpassword) {
      const registered = {
        fname: this.state.fname,
        lname: this.state.lname,
        password: this.state.password,
        nic: this.state.nic,
        gender: this.state.gender,
        address: this.state.address,
        city: this.state.city,
        province: this.state.province,
        email: this.state.email,
        contactNo: this.state.contactNo,
      }
      console.log(registered)
      axios
        .post('http://localhost:5000/api/registerUser', registered)
        .then((response) => console.log(response))

      this.setState({
        fname: '',
        lname: '',
        password: '',
        rpassword: '',
        nic: '',
        gender: '',
        address: '',
        city: '',
        province: '',
        email: '',
        contactNo: '',
      })
    } else {
      alert('unmatched password')
      this.setState({
        password: '',
        rpassword: '',
      })
    }
  }

  render() {
    return (
      <div>
        <div className='add-user-form '>
          <div className='signup-title'>Signup Form</div>
          <Form onSubmit={this.onsubmit}>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='first name'
                aria-describedby='basic-addon2'
                value={this.state.fname}
                onChange={this.changeFname}
                required='true'
              />
            </InputGroup>

            <InputGroup className='mb-3'>
              <FormControl
                placeholder='last name'
                aria-describedby='basic-addon2'
                value={this.state.lname}
                onChange={this.changeLname}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                type='password'
                placeholder='password'
                value={this.state.password}
                onChange={this.changePassword}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                type='password'
                placeholder='repeat password'
                value={this.state.rpassword}
                onChange={this.changeRpassword}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='NIC'
                value={this.state.nic}
                onChange={this.changeNIC}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <select
                name=''
                id=''
                value={this.state.gender}
                onChange={this.changeGender}
                className=' select-catergary'
                required='true'
              >
                <option value='' disabled selected>
                  gender
                </option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='address'
                value={this.state.address}
                onChange={this.changeAddress}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='city'
                value={this.state.city}
                onChange={this.changeCity}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='province'
                value={this.state.province}
                onChange={this.changeProvince}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                type='email'
                placeholder='email'
                value={this.state.email}
                onChange={this.changeEmail}
                required='true'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='contact No'
                value={this.state.contactNo}
                onChange={this.changeContactNo}
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
                Signup
              </Button>{' '}
            </div>
          </Form>
        </div>
      </div>
    )
  }
}
