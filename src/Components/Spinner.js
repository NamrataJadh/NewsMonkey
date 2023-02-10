import React from 'react'
import loading from './assets/spinner.gif'

const Spinner = () => {
    return (
      <div className='container text-center my-5'>
        <img src={loading} alt='..loading' style={{height: '5rem'}}/>
      </div>
    )
}

export default Spinner
