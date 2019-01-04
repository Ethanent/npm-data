# npm-data
> Fetch NPM package metadata

[GitHub](https://github.com/ethanent/npm-data) | [NPM](https://www.npmjs.com/package/npm-data)

# Basic usage

```js
const packageData = require('npm-data')

// in async context...

const phinLatestMetadata = await packageData('phin', 'latest')

console.log(phinLatestMetadata.version)
```

## Fetch all versions

```js
const phinAllMetadata = await packageData('phin')

console.log(phinAllMetadata.created)

// "2014-05-21T03:41:11.311Z"
```

## Fetch specific version

```js
const phinAllMetadata = await packageData('phin', '3.2.4')

console.log(phinAllMetadata.main)

// "lib/phin.min.js"
```