import React from 'react'
import Navigation from '../components/Navigation'


class LoginPage extends React.Component {
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
								<input className="text-input" type="text" placeholder="Enter email"/>
							</div>
							<div className="password-field">
								<label htmlFor="password">Password</label>
								<input className="text-input" type="password" placeholder="Enter password"/>
							</div>
							<div className="login-buttons">
								<button className="submit-input">Log in</button>
							</div>
						</div>

					</div>
					<div className="signup-container"></div>
				</div>
			</div>
		)
	}
}

export default LoginPage