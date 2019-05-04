import React, { Component} from 'react'
import Gallery from './components/Gallery'
export default class Listing extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  renderOtherImages () {

    let testArray = [1,2,3,4,5,6,7,8,9,10,11,12]

    return testArray.map((item,i) => {
      return(
        <div key={i} className="thumb-img" style={{"backgroundImage": "url('https://static.cargurus.com/images/site/2015/10/19/18/30/2016_honda_accord_touring-pic-8875933662102923932-640x480.jpeg')"}}>
        </div>
      )

    })
  }
  render () {
    const { match, location, history } = this.props

    return (
      <div className='listing-section'>
        <div className="container">
          <div className="white-box">
            <section className="sub-menu">
              <div className="direction">
                <a href="#" className="prev">Prev</a>
                <a href="#" className="next">Next</a>
              </div>
              <nav className="sub-links">
                <a href="#">More Ads by User</a>
                <a href="#">Print</a>
                <a href="#">Share</a>
                <a href="#">Contact Seller</a>
              </nav>
            </section>
            <section className="content-area">
              <div className="media-column">
                <Gallery />
              </div>
              <div className="details-column">
                <div className="date">Posted: May 2th</div>
                <h3 className="title">Black Honda Accord 2016</h3>
                <h4 className="price">$46,300</h4>
                <div className="more-details">
                  <div className="info">
                    <label>Vin</label>
                    <h5>QUWUEUIROWOR</h5>
                  </div>
                  <div className="info">
                    <label>Mileage</label>
                    <h5>34556</h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>6-Speed Automatic</h5>
                  </div>
                  <div className="info">
                    <label>Vin</label>
                    <h5>QUWUEUIROWOR</h5>
                  </div>
                  <div className="info">
                    <label>Mileage</label>
                    <h5>34556</h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>6-Speed Automatic</h5>
                  </div>
                </div>
                <div className="description">
                <label>Description</label>
                  <p>This 2016 Honda Accord is a ONE-OWNER CLEAN CARFAX AND NON-SMOKER vehicle!</p>

                  <p>Lorem ipsum dolor amet ramps everyday carry YOLO mumblecore hella. Cronut bicycle rights forage, brunch craft beer tacos leggings af hammock gastropub woke vice. Pok pok deep v trust fund jianbing beard migas, glossier slow-carb irony vape meggings venmo. Hot chicken meh chia, neutra man bun semiotics asymmetrical cornhole swag pabst pok pok.</p>

                  <p>Lorem ipsum dolor amet ramps everyday carry YOLO mumblecore hella. Cronut bicycle rights forage, brunch craft beer tacos leggings af hammock gastropub woke vice. Pok pok deep v trust fund jianbing beard migas, glossier slow-carb irony vape meggings venmo. Hot chicken meh chia, neutra man bun semiotics asymmetrical cornhole swag pabst pok pok.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
