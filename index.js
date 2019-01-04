const c = require('centra')

module.exports = async (packageName, version) => {
	if (!packageName) {
		throw new Error('Package name is missing.');
	}

	const req = c('https://registry.npmjs.org/').path(packageName)

	if (typeof version === 'string') req.path(version)

	const res = await req.send()

	if (res.statusCode !== 200) {
		if (res.statusCode === 404) {
			reject(new Error('Package does not exist in NPM registry.'))
		}
		else {
			reject(new Error('Unexpected status code: ' + res.statusCode))
		}
	}
	else {
		return await res.json()
	}
}