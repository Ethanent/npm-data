/**
* Get information about an NPM package
* @module npm-data
*/

const phin = require('phin')

/**
* Get package metadata
* @function
* @param {string} packageName - Package name
* @param {string} [version=all] - Package version. 'all' gets full metadata. (ex. '1.0.0', 'latest', 'all')
* @param {Object} [phinOptions={}] - Additional custom options for phin library. See <a href='https://github.com/Ethanent/phin'>phin on GitHub</a> for details.
*/
module.exports = (packageName, version, phinOptions) => {
	if (!packageName) {
		throw new Error('Package name is missing.');
	}

	return new Promise((resolve, reject) => {
		phin(Object.assign((phinOptions || {}), {
			'url': 'http://registry.npmjs.org/' + packageName + (version ? (version === 'all' ? '' : '/' + version) : ''),
			'method': 'GET',
			'compression': (!version || version === 'all' ? true : false)
		}), (err, res) => {
			if (err) {
				reject(err)
			}
			else {
				if (res.statusCode !== 200) {
					if (res.statusCode === 404) {
						reject('Package does not exist in NPM registry.')
					}
					else {
						reject('Unexpected status code: ' + res.statusCode)
					}
				}
				else {
					try {
						resolve(JSON.parse(res.body))
					}
					catch (err) {
						reject('Failed to parse response from NPM resistry API.')
					}
				}
			}
		})
	})
}