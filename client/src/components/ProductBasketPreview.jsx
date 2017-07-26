import React from 'react'
import {formatPrice} from '../helpers.js'

class ProductBasketPreview extends React.Component {
	render() {
		return (
			<div className="product-basket-preview">
         
         <img src="images/burtonBindingCork.jpeg"></img>
         <div className="details-container">
          <p className="product-name">Product Name</p>
          <p className="order-details">Blue, M, QTY: 1</p>
         </div>
         <div className="price-container">
           <p className="discount-price">{formatPrice(21000)}</p>
           <p className="full-price">{formatPrice(30000)}</p>
        </div>
      </div>
		)
	}
}

export default ProductBasketPreview