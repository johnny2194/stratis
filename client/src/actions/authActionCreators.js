import axios from 'axios'

export function signup(signupDetails) {
	return {
		type: 'SIGNUP_POST',
		payload: axios.post('http://localhost:3000/signup', signupDetails)
	}
}

export function login(loginDetails) {
	return {
		type: 'LOGIN_POST',
		payload: axios.post('http://localhost:3000/login', loginDetails)
	}
}

export function checkValidation() {
	return {
		type: 'CHECK_VALIDATION',
		payload: axios.get('http://localhost:3000/check-validation')
	}
}