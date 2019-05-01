import React, { Component} from 'react'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  renderCategories = () => {
    let testArray = [1,2,3,4,5,6,7]

    return testArray.map((item,i) => {
      return(
        <div className="category"key={i}>
          <div className="title">Community</div>
          <div className="categories-links">
            <a href="#" className="link">Community</a>
            <a href="#" className="link">Activities</a>
            <a href="#" className="link">Artist</a>
            <a href="#" className="link">Childcare</a>
            <a href="#" className="link">Classes</a>
            <a href="#" className="link">Events</a>
            <a href="#" className="link">Community</a>
            <a href="#" className="link">General</a>
            <a href="#" className="link">Groups</a>
            <a href="#" className="link">Local News</a>
            <a href="#" className="link">Lost &amp; Found</a>
            <a href="#" className="link">Community</a>
            <a href="#" className="link">Community</a>
          </div>
        </div>
      )

    })
  }
  renderTags = () => {
      let testArray = [1,2,3,4,5,6,7]

      return testArray.map((item,i) => {
        return (
          <div className="tag" key={i}>Apple Mackbook</div>
        )
      })

  }
  render () {
    return (
      <div className='home'>
        <div className="container">
          <h1>Getting You Exactly What <br/>Your Looking For</h1>
          <section className={`categories`}>
            {this.renderCategories()}
          </section>
          <section className="trending">
            <input type="text" name="search" className="search"/>
            <div className="title">
              <i className="far fa-clock"></i>
              Trending Now
            </div>
            <div className="trending-tags">
              {this.renderTags()}
            </div>
          </section>
        </div>
      </div>
    )
  }
}
