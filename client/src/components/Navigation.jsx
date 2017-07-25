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

	render() {
    const basket = this.props.basketVisible ? <Basket toggleBasket={this.props.toggleBasket}/> : ''
    const basketMenuItemText = this.props.basketVisible ? 'Close' : 'Bag 0'
    const mensDropDown = this.props.dropdownActive ? <MensDropDown currentDropdown={this.props.currentHoverDropdown} /> : ''

    
    const handleToggleBasket = () => {
      this.props.toggleBasket()
      if (this.props.initialStyling !== 'navigation navigation-invert') {
        const styling = this.props.styling == 'navigation' ? 'navigation navigation-invert' : 'navigation'
        this.props.changeStyling(styling)
      }
    }

    const handleToggleMensDropDown = () => {
      this.props.toggleMensDropDown()
      if (this.props.initialStyling !== 'navigation navigation-invert') {
        const styling = this.props.styling == 'navigation' ? 'navigation navigation-invert' : 'navigation'
        this.props.changeStyling(styling)
      }
    }



		return (
			<div ref="nav" className={this.props.styling}>
        <ul>
          <li ref="menu" className="menu fa fa-bars fa-4x"></li>
          <li ref="men" className="men" onMouseEnter={handleToggleMensDropDown}>Men</li>
          <li ref="women" className="women">Women</li>
          <li ref="board" className="board">Board</li>
          <li ref="ski" className="ski">Ski</li>
        </ul>
        
        <div ref="logo-wrapper">
          <Link to="/">
            <span></span>
          </Link>
        </div>
        
        <ul ref="right-nav" className="right-nav">
          <li className="login">Login</li>
          <li>Search</li>
          <li className="bag"onClick={handleToggleBasket}>{basketMenuItemText}</li>
        </ul>

        {basket}
        {mensDropDown}
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