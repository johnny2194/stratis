import React from 'react'
import ScrollLock from 'react-scrolllock';
import ProductBasketPreview from './ProductBasketPreview'
import {formatPrice} from '../helpers.js'


import {connect} from 'react-redux'
import * as actionCreators from '../actions/basketActionCreators'
import {bindActionCreators} from 'redux'

class Basket extends React.Component {

  mapProductBasketPreviews() {
    return this.props.basket.map((item, index) => {
      return <ProductBasketPreview key={index} product={item}/>
    })
  }

  render() {
    return (
      <div className="basket-container">
        <div onClick={this.props.toggleBasket}>
        </div>
        <div className="basket">
         <div className="products-container">
          {this.mapProductBasketPreviews()}
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


function mapStateToProps(state, router) {
  return Object.assign({}, state.basket, router)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)