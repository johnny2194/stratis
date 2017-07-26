function getId(queryString) {
	const queryStringArray = queryString.replace('?', '').split('&')
	const queryObject = {}
	queryStringArray.forEach((queryString) => {
		const keyAndValue = queryString.split('=')
		queryObject[keyAndValue[0]] = Number(keyAndValue[1])
	})
	return queryObject.id
}

export default {
	getId
}