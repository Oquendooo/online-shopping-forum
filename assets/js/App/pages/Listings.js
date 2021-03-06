import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  renderItems = () => {
    let testArray = [1,2,3,4,5,6,7,8]

    return testArray.map((item,i) => {
      return(
        <div className="item" key={i}>
          <div className="image">
            <div className="price">
              $8290
            </div>
            img
          </div>
          <div className="details">
            <i className="far fa-star"></i>
            <h5>2016 Honda Accord</h5>
            <h6>Brooklyn</h6>
          </div>
        </div>
      )

    })
  }


  render () {
    const { match, location, history } = this.props
    return (
      <div className='listings-page'>
        <div className="container">
          <section id="filter">
            <div className="form-group price">
              <label htmlFor="">Price</label>
              <div className="min-max">
                < select name = "min-price"
                className = "min-price" >
                <option value="0">0</option>
                </select>
                <select name="max-price" className="min-price">
                  <option value="1000">1000</option>
                </select>
              </div>
            </div>
            <div className="form-group make">
              <label htmlFor="">Make</label>
              <select name="make" className="make">
                <option value="bmw">bmw</option>
              </select>
            </div>
            <div className="form-group model">
              <label htmlFor="">Model</label>
              <select name="make" className="model">
                <option value="All">All Models</option>
              </select>
            </div>
            <div className="form-group button">
              <div className="primary-btn">
                Update
              </div>
              <div className="reset-btn">
                Reset
              </div>
            </div>
          </section>
        </div>

        <section id="list-view">
          <div className="container">
            <div className="white-box">
            
              <section className="change-view">
                <div className="form-group view-dropdown">
                  <select name="select-view" className="select-view">
                    <option value="gallery">Gallery View</option>
                    <option value="list">List View</option>
                    <option value="gallery">Thumb View</option>
                  </select>
                </div>
                <div className="form-group sort-dropdown">
                  <select name="sort-dropdown" className="sort-dropdown">
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </section>
              <section className="all-items">
                {this.renderItems()}
              </section>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
