import React, { Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './reuseables/Header'
import Home from './pages/Home'
import City from './pages/City'
import Category from './pages/Category'
import Listings from './pages/Listings'
import Listing from './pages/Listing'
export default class App extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <Router> 
        <div>
          <Route path='/' component={Header} />

          <Route exact path='/' component={Home} />
          
          <Route exact path='/:city/' component={Home} />
          <Route exact path='/:city/:category/' component={Category} />
          <Route exact path='/:city/:category/:listings' component={Listings} />
          <Route exact path='/:city/:category/:listings/:listing' component={Listing} />
        </div>
      </Router>

    )
  }
}
