import React, { Component} from 'react'

export default class Category extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {

    const { match, location, history } = this.props

    return (
      <div className='category'>
        <div className="container">
          These are the listings<br/>
          This category is: {match.params.category}<br/>
  
        
        </div>
      </div>
    )
  }
}
