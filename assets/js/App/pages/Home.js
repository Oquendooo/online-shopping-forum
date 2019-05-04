import React, { Component} from 'react'
import axios from 'axios'
export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categoriesData: []
    }
  }


  componentDidMount(){
    const self = this;
    const { match, history } = this.props
    if(match.params.city === undefined){
      history.push('/nyc')
    }

    axios.get(`/api/${match.params.city}/categories`)
    .then(function (response) {
      self.setState({categoriesData: response.data})
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  renderCategories = () => {
    if(this.state.categoriesData.length != 0){
      return this.state.categoriesData.map((category,i) => {
        const renderSubCategories = () => {
          return category.listings.map((listing,index)=> {
            return (
              <a href={`${category.title}/${listing.slug}`} className="link" key={index}>
              {listing.name}
              </a>
            )
          })
        }
        return(
          <div className="category"key={i}>
            <div className="title">{category.title}</div>
            <div className={`categories-links ${(category.title === 'jobs' || category.title === 'personals' || category.title === 'housing') ? 'single-col' : ''}`}>
              {renderSubCategories()}
  
            </div>
          </div>
        )
      })
    }else {
      return <div>Loading</div>
    }

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
