import React, { Component} from 'react'

export default class Listing extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {

    const { match, location, history } = this.props

    return (
      <div className='listing'>
        <div className="container">
          This listing is: {match.params.listing}<br/>
  
        
        </div>
      </div>
    )
  }
}
