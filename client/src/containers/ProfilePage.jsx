import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/authActionCreators'

import Navigation from '../components/Navigation'
import FilterBar from '../components/FilterBar'
import ProductsList from '../components/ProductsList'


class ProfilePage extends React.Component {

	componentWillReceiveProps(nextProps) {
		this.checkSignedInStatus(nextProps)	
	}

	checkSignedInStatus(props) {
		if (!props.user) {
			this.props.history.push('/login')
		}
	}

	render() {
		return (
			<div className="profile-page">
				<h1>PROFILE PAGE!!!!!</h1>
      </div>
		)
	}
}

function mapStateToProps(state, router) {
	return Object.assign({}, state.auth, router)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)