import React from 'react'

class LandingPage extends React.Component {
	render() {
		return (
      <div className="landing-page-wrapper">
  			<div className="hero">
          <span></span>
          <div>Sale is on!</div> 
        </div>
        <div className="product-strip">
          <div>
            <span className="p1"></span>
          </div>
          <div>
           <span className="p2"></span>
          </div>
          <div>
            <span className="p3"></span>
          </div>
          <div >
            <span className="p4"></span>
          </div>
        </div>
      </div>
		)
	}
}

export default LandingPage