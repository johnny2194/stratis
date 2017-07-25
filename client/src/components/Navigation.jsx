import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/navigationActionCreators'
import {Link} from 'react-router-dom'

import Basket from './basket'
import MensDropDown from './MensDropDown'

class Navigation extends React.Component {
  componentDidMount() {
    if (this.props.initialStyling) this.props.changeStyling(this.props.initialStyling)
    const nav = this.refs.nav
    const menu = this.refs.menu
    const men = this.refs.men
    const women = this.refs.women
    const board = this.refs.board
    const ski = this.refs.ski
    const logoWrapper = this.refs['logo-wrapper']
    const rightNav = this.refs['right-nav']


    nav.addEventListener('mouseleave', (event) => {
      this.props.hideDropdown()
      this.props.setCurrentDropdown("")
    })
    menu.addEventListener('mouseenter', (event) => {
      this.props.hideDropdown()
      this.props.setCurrentDropdown("")
    })
    men.addEventListener('mouseenter', (event) => {
      this.props.showDropdown()
      this.props.setCurrentDropdown("men")
    })
    women.addEventListener('mouseenter', (event) => {
      this.props.showDropdown()
      this.props.setCurrentDropdown("women")
    })
    board.addEventListener('mouseenter', (event) => {
      this.props.showDropdown()
      this.props.setCurrentDropdown("board")
    })
    ski.addEventListener('mouseenter', (event) => {
      this.props.showDropdown()
      this.props.setCurrentDropdown("ski")
    })
    logoWrapper.addEventListener('mouseenter', (event) => {
      this.props.hideDropdown()
      this.props.setCurrentDropdown("")
    })
    rightNav.addEventListener('mouseenter', (event) => {
      this.props.hideDropdown()
      this.props.setCurrentDropdown("")
    })
  }

  componentWillUnmount() {
    const nav = this.refs.nav
    const menu = this.refs.menu
    const men = this.refs.men
    const women = this.refs.women
    const board = this.refs.board
    const ski = this.refs.ski
    const logoWrapper = this.refs['logo-wrapper']
    const rightNav = this.refs['right-nav']
    nav.removeEventListener('mouseleave')
    menu.removeEventListener('mouseenter')
    men.removeEventListener('mouseenter')
    women.removeEventListener('mouseenter')
    board.removeEventListener('mouseenter')
    ski.removeEventListener('mouseenter')
    logoWrapper.removeEventListener('mouseenter')
    rightNav.removeEventListener('mouseenter')

  }

  handleDropdownActive(currentDropdown) {
    this.props.showDropdown()
    this.props.setCurrentDropdown(currentDropdown)
  }

  handleDropdownInactive() {
    this.props.hideDropdown()
    this.props.setCurrentDropdown("")
  }

  handleToggleBasket() {
    this.props.toggleBasket()
    if (this.props.initialStyling !== 'navigation navigation-invert') {
      const styling = this.props.styling == 'navigation' ? 'navigation navigation-invert' : 'navigation'
      this.props.changeStyling(styling)
    }
  }

  navStyling() {
    let navStyling
  }

	render() {
    const basket = this.props.basketVisible ? <Basket toggleBasket={this.props.toggleBasket}/> : ''
    const basketMenuItemText = this.props.basketVisible ? 'Close' : 'Bag 0'
    const mensDropDown = this.props.dropdownActive ? <MensDropDown currentDropdown={this.props.currentHoverDropdown} /> : ''



    const menStyling = this.props.currentHoverDropdown == "men" ? "men active" : "men"
    const womenStyling = this.props.currentHoverDropdown == "women" ? "women active" : "women"
    const boardStyling = this.props.currentHoverDropdown == "board" ? "board active" : "board"
    const skiStyling = this.props.currentHoverDropdown == "ski" ? "ski active" : "ski"


    const navStyling = () => {
      if (this.props.dropdownActive) {
        return "navigation navigation-invert"
      }
    }


    



		return (
			<div ref="nav" className={this.props.styling}>
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
          <li className="login">Login</li>
          <li>Search</li>
          <li className="bag"onClick={this.handleToggleBasket.bind(this)}>{basketMenuItemText}</li>
        </ul>

        {basket}
        {mensDropDown}
      </div>
		)
	}
}


// this is taking the navigation portion of state and attaching it to the Navigation's props
function mapStateToProps(state) {
  return Object.assign({}, state.navigation,  state.routing)
}

// this is attaching our actions to the Navigation component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)