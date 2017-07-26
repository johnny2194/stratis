import React from 'react'
import ScrollLock from 'react-scrolllock';
import ProductBasketPreview from './ProductBasketPreview'
import {formatPrice} from '../helpers.js'


class Basket extends React.Component {

  render() {
    return (
      <div className="basket-container">
        <div onClick={this.props.toggleBasket}>
        </div>
        <div className="basket">
         <div className="products-container">
          <ProductBasketPreview/>
          <ProductBasketPreview/>
          <ProductBasketPreview/>
          <ProductBasketPreview/>
          
         </div>
         <div className="summary-checkout-container">
           <div className="text-summary-container">
              <div className="left-text">
                <p className="shipping">SHIPPING</p>
                <p className="total">ORDER TOTAL</p>
              </div>
              <div className="right-text">
                <p className="free">FREE</p>
                <p className="price">{formatPrice(0)}</p>
              </div>
            </div>
          <button>CONTINUE SHOPPING</button>
          </div>
         </div> 
        <ScrollLock />
      </div>
    )
  }

}

export default Basket