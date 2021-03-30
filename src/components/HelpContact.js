import React, { Component } from 'react'
import './css/helpContact.css'
export default class HelpContact extends Component {
  render() {
    return (
      <div>
        <div className='help-contact-container container d-flex flex-row flex-wrap p-3'>
            <div className='span1' >
              <img src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" width="500px" height="600px" />
            </div>
            <div className='span3'>
            <dl>
              <dt>VISIT US:</dt>
              <br/>
              <dd>Sidestate, NSW,<br/>4132, Australia.</dd>
              <br/>
              <br/>
              <dt>CALL US:</dt>
              <br/>
              <dd>+88 018 4113 6251</dd>
              <br/>
              <br/>
              <dt>CONTACT US:</dt>
              <br/>
              <dd>ViCkEy.46S@gmail.com<br/>Ez.SoLuTiOn.45@gmail.com</dd>
            </dl>
            </div>
        </div>
      </div>
    )
  }
}
