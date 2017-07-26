import axios from 'axios'

export function signup(signupDetails) {
	return {
		type: 'SIGNUP_POST',
		payload: axios.post('http://localhost:3000/signup', signupDetails)
	}
}