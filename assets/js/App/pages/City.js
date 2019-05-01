import React, { Component} from 'react'

export default class City extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {

    const { match, location, history } = this.props

    return (
      <div className='city'>
        <div className="container">
          This City is: {match.params.city}<br/>
  
        
        </div>
      </div>
    )
  }
}
