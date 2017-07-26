import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/authActionCreators'

import Navigation from '../components/Navigation'


class LoginPage extends React.Component {

	constructor(props) {
		super(props)
	}

	login() {

		const loginDetails = {
			email: this.refs.email.value,
			password: this.refs.password.value
		}

		this.props.login(loginDetails)
	}

	componentWillReceiveProps(nextProps) {
		this.checkSignedInStatus(nextProps)	
	}

	checkSignedInStatus(props) {
		if (props.user) {
			this.props.history.push('/profile')
		}
	}

	render() {
		return (
			<div className="login-page">
				<Navigation />
				<div className="page-container">
					<div className="login-form">
						<div>
							<h2>Log in</h2>
							<div className="email-field">
								<label htmlFor="email">Email</label>
								<input ref="email" className="text-input" type="text" placeholder="Enter email"/>
							</div>
							<div className="password-field">
								<label htmlFor="password">Password</label>
								<input ref="password" className="text-input" type="password" placeholder="Enter password"/>
							</div>
							<div className="login-buttons">
								<button className="submit-input" onClick={this.login.bind(this)}>Log in</button>
							</div>
						</div>

					</div>
					<div className="signup-container"></div>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)