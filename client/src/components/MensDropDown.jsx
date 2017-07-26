import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/navigationActionCreators'
import {Link} from 'react-router-dom'



class MensDropDown extends React.Component {

  constructor(props) {
    super(props)
    this.handleHideDropdown = this.handleHideDropdown.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    const dropdownBackground = this.refs['dropdown-background']
    dropdownBackground.removeEventListener('mouseenter', this.handleHideDropdown)
  }

  handleHideDropdown() {
    this.props.hideDropdown()
    this.props.setCurrentDropdown("")
  }

  render() {
    return (
      <div className="mens-drop-down">
        <div className="menu">
          <div>
            <Link to="/" className="menu-header">Board</Link>
              <div className="link-column">
                <Link to="/" className="sub-header">Hardware</Link>
                <Link to="/" className="category-product-link">Snowboards</Link>
                <Link to="/" className="category-product-link">Bindings</Link>
                <Link to="/" className="category-product-link">Boots</Link>
                <Link to="/" className="category-product-link">Helmets</Link>
              </div>
              <div className="link-column">
                <Link to="/" className="sub-header">Gear</Link>
                <Link to="/" className="category-product-link">Jackets</Link>
                <Link to="/" className="category-product-link">Pants</Link>
              </div>
            </div>
            <div>
              <Link to="/" className="menu-header">Ski</Link>
                <div className="link-column">
                  <Link to="/" className="sub-header">Hardware</Link>
                  <Link to="/" className="category-product-link">Skis</Link>
                  <Link to="/" className="category-product-link">Bindings</Link>
                  <Link to="/" className="category-product-link">Boots</Link>
                  <Link to="/" className="category-product-link">Helmets</Link>
                </div>
                <div className="link-column">
                  <Link to="/" className="sub-header">Gear</Link>
                  <Link to="/" className="category-product-link">Jackets</Link>
                  <Link to="/" className="category-product-link">Pants</Link>
                </div>
              </div>
              <div>
                <Link to="/" className="menu-header">Accessories</Link>
                  <div className="link-column">
                    <Link to="/" className="category-product-link">Socks</Link>
                    <Link to="/" className="category-product-link">Beanies</Link>
                    <Link to="/" className="category-product-link">Goggles</Link>
                    <Link to="/" className="category-product-link">Gloves</Link>
                  </div>
              </div>
        </div>
        <div ref="dropdown-background" onMouseEnter={this.handleHideDropdown.bind(this)}></div>
        
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state.navigation
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MensDropDown)