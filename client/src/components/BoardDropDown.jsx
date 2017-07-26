import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/navigationActionCreators'
import {Link} from 'react-router-dom'



class BoardDropDown extends React.Component {

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
      <div className="mens-drop-down board-drop-down">
        <div className="menu">
          <div className="board-links">
            <Link to="/" className="menu-header">Mens</Link>
            <div className="link-container"> 
              <div className="link-column">
                {/*<Link to="/" className="sub-header">Hardware</Link>*/}
                <Link to="/products?" className="category-product-link">Boards</Link>
                <Link to="/" className="category-product-link">Bindings</Link>
                <Link to="/" className="category-product-link">Boots</Link>
                <Link to="/" className="category-product-link">Helmets</Link>
              </div>
              <div className="link-column">
                {/*<Link to="/" className="sub-header">Hardware</Link>*/}
                <Link to="/" className="category-product-link">Jackets</Link>
                <Link to="/" className="category-product-link">Pants</Link>
              </div>
            </div>
            </div>
            <div className="ski-links">
              <Link to="/" className="menu-header">Womens</Link>
              <div className="link-container">
                <div className="link-column">
                {/*<Link to="/" className="sub-header">Hardware</Link>*/}
                  <Link to="/" className="category-product-link">Boards</Link>
                  <Link to="/" className="category-product-link">Bindings</Link>
                  <Link to="/" className="category-product-link">Boots</Link>
                  <Link to="/" className="category-product-link">Helmets</Link>
                </div>
                <div className="link-column">
                {/*<Link to="/" className="sub-header">Hardware</Link>*/}
                  <Link to="/" className="category-product-link">Jackets</Link>
                  <Link to="/" className="category-product-link">Pants</Link>
                </div>
              </div>
              </div>
              <div className="accessories-links">
                <Link to="/" className="menu-header">Accessories</Link>
                <div className="link-container">
                  <div className="link-column">
                    <Link to="/" className="category-product-link">Wax</Link>
                    <Link to="/" className="category-product-link">Tools</Link>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoardDropDown)