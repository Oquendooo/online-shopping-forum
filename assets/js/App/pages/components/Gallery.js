import React, { Component} from 'react'

export default class Gallery extends Component {
  constructor () {
    super()
    this.state = {
      currentImage: '',
      allImgs: [],
      currentIndex: 0
    }
  }

  componentWillMount () {
    const allImgs =  [
      'https://images.craigslist.org/00W0W_7RZZEIoukAH_600x450.jpg',
      'https://images.craigslist.org/00a0a_baC7DROk0OL_600x450.jpg',
      'https://images.craigslist.org/00404_iB3n5lhRu0m_600x450.jpg',
      'https://images.craigslist.org/00V0V_4qcsKYim4z2_600x450.jpg',
      'https://images.craigslist.org/00V0V_hInRWlneMEH_600x450.jpg',
      'https://images.craigslist.org/00O0O_ccQVII8uATw_600x450.jpg',
      'https://images.craigslist.org/00s0s_ba6CTKH99wH_600x450.jpg',
      'https://images.craigslist.org/00d0d_1b2fefn94ln_600x450.jpg',
      'https://images.craigslist.org/00u0u_8A5XSJ0OBJt_600x450.jpg',
      'https://images.craigslist.org/00g0g_5S2uBiEe3Tc_600x450.jpg',
      'https://images.craigslist.org/00a0a_9ILVAk44Eaj_600x450.jpg',
      'https://images.craigslist.org/00e0e_3K8Xp4iZSqp_600x450.jpg'
    ]

    this.setState({
        allImgs,
        currentImage: allImgs[this.state.currentIndex]
    })
  }
  clickedPrevBtn = () => {
    const {currentIndex} = this.state
    if(currentIndex >  0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }
  clickedNextBtn =  () => {
    const {currentIndex} = this.state
    const {length} = this.state.allImgs
    if(currentIndex != length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }
 
  clickedOtherImage =  (index) => {
    this.setState({
      currentIndex: index
    })
  }

  renderOtherImages () {

    let testArray = [1,2,3,4,5,6,7,8,9,10,11,12]

    return this.state.allImgs.map((item,i) => {
      return(
        <div key={i} className="thumb-img" onClick={this.clickedOtherImage.bind(null, i)} style={{"backgroundImage": `url('${item}')`}}>
        </div>
      )

    })
  }
  render () {
    console.log(this.state);
    return (
      <div className="gallery">
        <div className="slider">
          <div className="main-image" >
            <div className="arrows left-arrow" onClick={this.clickedPrevBtn}> 
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="arrows right-arrow" onClick={this.clickedNextBtn}>
              <i className="fas fa-chevron-right"></i>
            </div>
            <div className="image-1"
            style={{"backgroundImage": `url('${this.state.allImgs[this.state.currentIndex]}')`}}
            >
            </div>
          </div>
        </div>
        <div className="thumbnails">
          {this.renderOtherImages()}
        </div>
      </div>
    )
  }
}
