import React from 'react'
import Navigation from '../components/Navigation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/authActionCreators'

class SignupPage extends React.Component {
	constructor(props) {
		super(props)
	}


	signUp() {

		const signupDetails = {
			first_name: this.refs.first_name.value,
			last_name: this.refs.last_name.value,
			email: this.refs.email.value,
			password: this.refs.password.value
		}

		this.props.signup(signupDetails)
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
			<div className="signup-page">
				<Navigation initialStyling="navigation navigation-invert"/>
				<div className="signup-container">
					<div className="left-panel"></div>
					<div className="signup-form-container">
						<div className="signup-form">
							<h2>Sign up</h2>
							<div className="name-fields">
								<div className="first_name-field">
									<label htmlFor="first_name">First name</label>
									<input ref="first_name" className="text-input" type="text" placeholder="Enter email" name="first_name"/>
								</div>
								<div className="last_name-field">
									<label htmlFor="last_name">Last name</label>
									<input ref="last_name" className="text-input" type="text" placeholder="Enter email" name="last_name"/>
								</div>
							</div>
							<div className="login-fields">
								<div className="email-field">
									<label htmlFor="email">Email</label>
									<input ref="email" className="text-input" type="text" placeholder="Enter email" name="email"/>
								</div>
								<div className="password-field">
									<label htmlFor="password">Password</label>
									<input ref="password" className="text-input" type="password" placeholder="Enter password" name="password"/>
								</div>
							</div>
							<div className="login-buttons">
								<button className="submit-input" onClick={this.signUp.bind(this)}>Log in</button>
							</div>
						</div>

					</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)