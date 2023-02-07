import React, { Component } from 'react'
import loading from './assets/spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='container text-center my-5'>
        <img src={loading} alt='..loading' style={{height: '5rem'}}/>
      </div>
    )
  }
}
