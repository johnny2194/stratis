import React from 'react'
import {formatPrice} from '../helpers.js'

class ProductBasketPreview extends React.Component {
	render() {
    const {product} = this.props
    console.log(product)
		return (
			<div className="product-basket-preview">
         
         <img src={product.image}></img>
         <div className="details-container">
          <p className="product-name">{product.product.name}</p>
          <p className="order-details">{product.color}, {product.size}, QTY: 1</p>
         </div>
         <div className="price-container">
           <p className="discount-price">{formatPrice(product.price)}</p>
           <p className="full-price">{formatPrice(product.price)}</p>
        </div>
      </div>
		)
	}
}

export default ProductBasketPreview