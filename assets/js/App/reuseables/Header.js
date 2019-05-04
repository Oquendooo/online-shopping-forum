import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className="container">
        <header className='site-header'>
          <div className='left-links'>
            <a href="/">
              <div className='logo'>
                Classified
              </div>
            </a>
    
            <div className='city'>
              New York
              <i className={`fas fa-chevron-down`}></i>
            </div>
          </div>
          <div className='right-links'>
            <div className='user-img'>
              img
            </div>
            <div className='user-dropdown'>
              My Account
              <i className={`fas fa-chevron-down`}></i>
            </div>
            <div className='post-listing-btn'>
              Post to Classified
            </div>
          </div>
        </header>
      </div>
    )
  }
}
