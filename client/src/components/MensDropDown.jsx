import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/navigationActionCreators'


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
        <div className="menu"></div>
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