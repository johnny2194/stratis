import React from 'react'
import ScrollLock from 'react-scrolllock';

class Basket extends React.Component {

  render() {
    return (
      <div className="basket-container">
        <div onClick={this.props.toggleBasket}>
        </div>
        <div className="basket">
        </div>
        <ScrollLock />
      </div>
    )
  }

}

export default Basket