'use strict';

require('whatwg-fetch');

module.exports = function (URL) {
  var OPTIONS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var FETCH_TIMEOUT = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10000;

  if (!URL) throw new Error('Url is required!');

  if (!isNaN(OPTIONS)) {
    FETCH_TIMEOUT = OPTIONS;
    OPTIONS = {};
  }
  var didTimeOut = false;

  return new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      didTimeOut = true;
      reject(new Error('Request timed out'));
    }, FETCH_TIMEOUT);

    fetch(URL, OPTIONS).then(function (response) {
      // Clear the timeout as cleanup
      clearTimeout(timeout);
      if (!didTimeOut) {
        console.log('fetch good! ', response);
        resolve(response);
      }
    }).catch(function (err) {
      console.log('fetch failed! ', err);
      // Rejection already happened with setTimeout
      if (didTimeOut) return;
      // Reject with error
      reject(err);
    });
  }).then(function () {
    // Request success and no timeout
    console.log('good promise, no timeout! ');
  }).catch(function (err) {
    // Error: response error, request timeout or runtime error
    console.log('promise error! ', err);
  });
};