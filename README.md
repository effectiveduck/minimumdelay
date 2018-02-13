# Minimum Delay

A tiny `Promise` wrapper to delay your promise resolution by a minimum timeout.

Only 61 bytes (minified and gzipped).

Heavily inspired by the [`nanodelay`](https://github.com/ai/nanodelay) library.

### Installation

```
yarn add minimumdelay
```

or if you prefer npm...

```
npm install minimumdelay
```

### Usage

```js
// import minimumdelay from 'minimumdelay'
const minimumdelay = require('minimumdelay')

// will wait at least 2000ms
const myPromise = fetch('some.url')
  .then(data => data.json)
 minimumdelay(myPromise, 2000)
  .then(data => console.log(data))
```
