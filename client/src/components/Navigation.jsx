import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/navigationActionCreators'

import Basket from './basket'

class Navigation extends React.Component {
	render() {
    const basket = this.props.basketVisible ? <Basket toggleBasket={this.props.toggleBasket}/> : ''
    const basketMenuItemText = this.props.basketVisible ? 'Close' : 'Bag 0'

    const navStyling = this.props.basketVisible ? "navigation invert" : 'navigation'
		return (
			<div className={navStyling}>
        <ul>
          <li className="menu fa fa-bars fa-4x"></li>
          <li>Men</li>
          <li>Women</li>
          <li>Board</li>
          <li className="ski">Ski</li>
        </ul>
        
        <div>
          <span></span>
        </div>
        
        <ul className="right-nav">
          <li>Login</li>
          <li>Search</li>
          <li onClick={this.props.toggleBasket}>{basketMenuItemText}</li>
        </ul>

        {basket}
      </div>
		)
	}
}


// this is taking the navigation portion of state and attaching it to the Navigation's props
function mapStateToProps(state) {
  return state.navigation
}

// this is attaching our actions to the Navigation component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)