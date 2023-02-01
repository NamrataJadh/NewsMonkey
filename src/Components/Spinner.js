import React, { Component } from 'react'
import loading1 from './assets/loading1.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='container my-5 pt-5'>
        <img src={loading1} alt='..loading' style={{height: '4rem'}}/>
      </div>
    )
  }
}
