import React from 'react'

class FeaturedProduct extends React.Component {
	render() {
		return (
			<div className="featured-product">
         <div>
           <h1>Brand</h1>
           <h1>Name</h1>
           <h1>Type</h1>
           <h1>Sizes</h1>
           <h1>Price</h1>
         </div>
         <img src={this.props.image}></img>
      </div>
		)
	}
}

export default FeaturedProduct