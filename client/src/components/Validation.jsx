import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/authActionCreators'

class Validation extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.checkValidation();
	}

	render() {
		return (
			<div></div>
		)
	}
}

function mapStateToProps(state, router) {
	return Object.assign({}, state.auth, router)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Validation)