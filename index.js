/**
 * Resolves your Promise after a set delay.
 *
 * @param {Promise} promise Promise you wish to delay.
 * @param {number} delay Minimum time (in ms) to wait.
 *
 * @return {Promise} Your promise, delayed.
 *
 * @example
 * const minimumdelay = require('minimumdelay');
 *
 * const myPromise = fetch('some.url')
 *  .then(data => data.json)
 * minimumdelay(myPromise, 2000)
 *  .then(data => console.log(data)) // will resolve after 2000 ms unless the request takes longer
 *
 * @name minimumdelay
 */
'use strict';

module.exports = function(promise, delay) {
  var delay_promise = new Promise(function (resolve) {
    return setTimeout(resolve, delay)
  })
  return Promise.all([promise, delay_promise]).then(function (d) {
    return d[0]
  })
}
