const w = require('whew');
const packageData = require('./')

w.add('Get all metadata for phin package from registry', (respond) => {
	packageData('phin').then((res) => {
		if (typeof res === 'object') {
			respond(true, 'Recieved response with some valid looking data.')
		}
		else {
			respond(false, 'Recieved unexpected response.')
		}
	}).catch((err) => {
		respond(false, err)
	})
})

w.add('Get phin package latest version metadata from registry', (respond) => {
	packageData('phin', 'latest').then((res) => {
		if (typeof res === 'object') {
			respond(true, 'Recieved response with some valid looking data.')
		}
		else {
			respond(false, 'Recieved unexpected response.')
		}
	}).catch((err) => {
		respond(false, err)
	})
})

w.add('Get phin package version 1.0.0 metadata from registry', (respond) => {
	packageData('phin', '1.0.0').then((res) => {
		if (typeof res === 'object' && res.version === '1.0.0') {
			respond(true, 'Recieved response with some valid looking data.')
		}
		else {
			respond(false, 'Recieved unexpected response.')
		}
	}).catch((err) => {
		respond(false, err)
	})
})

w.add('Get whew package with custom phin options', (respond) => {
	packageData('phin', null, {
		'timeout': 1000000
	}).then((res) => {
		if (typeof res === 'object') {
			respond(true, 'Recieved response with some valid looking data.')
		}
		else {
			respond(false, 'Recieved unexpected response.')
		}
	}).catch((err) => {
		respond(false, err)
	})
})

w.test();