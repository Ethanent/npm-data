# npm-data
> Get information about NPM packages with ease.

---

[Full Documentation](https://ethanent.github.io/npm-data/) | [GitHub](https://github.com/Ethanent/npm-data) | [NPM](https://www.npmjs.com/package/npm-data)

# Basic usage

```javascript
const packageData = require('npm-data')

packageData('phin', 'latest').then((res) => {
	console.log(res.version); // 2.2.90 or something
}).catch((err) => {
	console.log('Error! ' + err)
})
```

# Full documentation

Find the full documentation [over here](https://ethanent.github.io/npm-data/)!