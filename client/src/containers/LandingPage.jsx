import React from 'react'
import FeaturedProduct from '../components/FeaturedProduct'

class LandingPage extends React.Component {
	render() {
		return (
      <div className="landing-page-wrapper">
  			<div className="hero">
          <span></span>
          <div>Sale is on!</div> 
        </div>
        <div className="product-strip">
          <FeaturedProduct></FeaturedProduct>
          <div>
            <div>
              <h1>Brand</h1>
              <h1>Name</h1>
              <h1>Type</h1>
              <h1>Sizes</h1>
              <h1>Price</h1>
            </div>
            <img src="/images/moment2.png"></img>
          </div>
          <div>
            <div>
              <h1>Brand</h1>
              <h1>Name</h1>
              <h1>Type</h1>
              <h1>Sizes</h1>
              <h1>Price</h1>
            </div>
            <img src="/images/burton2.png"></img>
          </div>
          <div >
            <div>
              <h1>Brand</h1>
              <h1>Name</h1>
              <h1>Type</h1>
              <h1>Sizes</h1>
              <h1>Price</h1>
            </div>
            <img src="/images/moment1.png"></img>
          </div>
        </div>
  

        

      </div>
		)
	}
}

export default LandingPage