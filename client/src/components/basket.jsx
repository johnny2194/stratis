import React from 'react'
import ScrollLock from 'react-scrolllock';
import ProductBasketPreview from './ProductBasketPreview'

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
         </div>
         <div className="summary-checkout-container">
           <div className="text-summary-container">
              <div className="left-text">
                <p>SHIPPING</p>
                <p>TOTAL</p>
              </div>
              <div className="right-text">
                <p>FREE</p>
                <p>0</p>
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