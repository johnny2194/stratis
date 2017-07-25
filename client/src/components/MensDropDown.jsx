import React from 'react'


class Basket extends React.Component {

  render() {
    return (
      <div className="basket-container">
        <div onClick={this.props.toggleBasket}>
        </div>
        <div className="basket">
        </div>
      </div>
    )
  }

}

export default Basket