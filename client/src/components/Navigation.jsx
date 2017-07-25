import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/navigationActionCreators'
import {Link} from 'react-router-dom'

import Basket from './basket'

class Navigation extends React.Component {
  componentWillMount() {
    if (this.props.initialStyling) this.props.changeStyling(this.props.initialStyling)
  }

	render() {
    const basket = this.props.basketVisible ? <Basket toggleBasket={this.props.toggleBasket}/> : ''
    const basketMenuItemText = this.props.basketVisible ? 'Close' : 'Bag 0'

    
    const handleToggleBasket = () => {
      this.props.toggleBasket()
      if (this.props.initialStyling !== 'navigation navigation-invert') {
        const styling = this.props.styling == 'navigation' ? 'navigation navigation-invert' : 'navigation'
        this.props.changeStyling(styling)
      }
    }



		return (
			<div className={this.props.styling}>
        <ul>
          <li className="menu fa fa-bars fa-4x"></li>
          <li className="men">Men</li>
          <li className="women">Women</li>
          <li className="board">Board</li>
          <li className="ski">Ski</li>
        </ul>
        
        <div>
          <Link to="/">
            <span></span>
          </Link>
        </div>
        
        <ul className="right-nav">
          <li className="login">Login</li>
          <li>Search</li>
          <li className="bag"onClick={handleToggleBasket}>{basketMenuItemText}</li>
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