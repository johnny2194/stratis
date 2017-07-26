import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/navigationActionCreators'
import {Link} from 'react-router-dom'

import Basket from './basket'
import MensDropDown from './MensDropDown'
import WomensDropDown from './WomensDropDown'
import BoardDropDown from './BoardDropDown'
import SkiDropDown from './SkiDropDown'

class Navigation extends React.Component {

  componentWillUnmount() {

  }

  handleDropdownActive(currentDropdown) {
    this.props.showDropdown()
    this.props.setCurrentDropdown(currentDropdown)
  }

  handleDropdownInactive() {
    this.props.hideDropdown()
    this.props.setCurrentDropdown("")
  }

  dropDown() {
    switch (this.props.currentHoverDropdown) {
      case 'men':
        return <MensDropDown />
      case 'women':
        return <WomensDropDown />
      case 'board':
        return <BoardDropDown />
      case 'ski':
        return <SkiDropDown />
      default:
        return ''
    }
  }

  loginButton() {
    if (this.props.user) {
      console.log('user is validated')
      return (<Link to="/profile"><li className="login">{this.props.user.first_name}</li></Link>)
    } else {
      return (<Link to="/login"><li className="login">Login</li></Link>)
    }
  }

 

  navStyling() {
    if (this.props.dropdownActive || this.props.basketVisible || this.props.styling == "navigation navigation-invert") {
      return "navigation navigation-invert"
    } else {
      return "navigation"
    }
  }

	render() {
    const basket = this.props.basketVisible ? <Basket toggleBasket={this.props.toggleBasket}/> : ''
    const basketMenuItemText = this.props.basketVisible ? 'Close' : 'Bag 0'
    const mensDropDown = this.props.dropdownActive ? <MensDropDown currentDropdown={this.props.currentHoverDropdown} /> : ''



    const menStyling = this.props.currentHoverDropdown == "men" ? "men active" : "men"
    const womenStyling = this.props.currentHoverDropdown == "women" ? "women active" : "women"
    const boardStyling = this.props.currentHoverDropdown == "board" ? "board active" : "board"
    const skiStyling = this.props.currentHoverDropdown == "ski" ? "ski active" : "ski"


    


    



		return (
			<div ref="nav" className={this.navStyling()}>
        <ul>
          <li ref="menu" className="menu fa fa-bars fa-4x" onMouseEnter={this.handleDropdownInactive.bind(this)}></li>
          <li ref="men" className={menStyling} onMouseEnter={this.handleDropdownActive.bind(this, "men")}>Men</li>
          <li ref="women" className={womenStyling} onMouseEnter={this.handleDropdownActive.bind(this, "women")}>Women</li>
          <li ref="board" className={boardStyling}  onMouseEnter={this.handleDropdownActive.bind(this, "board")}>Board</li>
          <li ref="ski" className={skiStyling} onMouseEnter={this.handleDropdownActive.bind(this, "ski")}>Ski</li>
        </ul>
        
        <div ref="logo-wrapper" onMouseEnter={this.handleDropdownInactive.bind(this)}>
          <Link to="/">
            <span></span>
          </Link>
        </div>
        
        <ul ref="right-nav" className="right-nav" onMouseEnter={this.handleDropdownInactive.bind(this)}>
          {this.loginButton()}
          <li>Search</li>
          <li className="bag"onClick={this.props.toggleBasket}>{basketMenuItemText}</li>
        </ul>
        {basket}
        {this.dropDown()}
      </div>
		)
	}
}


// this is taking the navigation portion of state and attaching it to the Navigation's props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.navigation, state.auth, routing)
}

// this is attaching our actions to the Navigation component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)