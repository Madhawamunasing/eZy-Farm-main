import React, { Component } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/login.css'
export default class Login extends Component {
  render() {
    return (
      <div>
        <div className='login-user-container'>
          <div className='login-title'>Login to your account</div>
          <Form>
            <InputGroup className='mb-3'>
              <FormControl placeholder='username' required='true' />
            </InputGroup>
            <InputGroup className='mb-3'>
              <FormControl
                placeholder='password'
                type='password'
                required='true'
              />
            </InputGroup>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Remember me' />
            </Form.Group>
            <Button
              variant='outline-primary'
              className='mt-5'
              type='submit'
              value='submit'
            >
              Login
            </Button>
          </Form>
          <p>
            Not a member?
            <Link to='./signup'>
              <a>Signup now</a>
            </Link>
          </p>
        </div>
      </div>
    )
  }
}
