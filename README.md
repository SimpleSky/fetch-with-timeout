# fetch-with-timeout
The fetch API started out as a target for criticism because of lack of timeout and request cancelation.  While those criticisms could be argued as fair or not, the you can't deny that the fetch API has been pretty awesome.  As we've always done, if a feature is missing, we can always shim it in.



## Usage

```bash
npm install --save fetch-with-timeout
```

```js
// ES5
var fetchWithTimeout = require('fetch-with-timeout');

// ES6
import fetchWithTimeout from 'fetch-with-timeout';

/**
 * fetch-with-timeout
 * @param domain (required)
 * @param options same as fetch options
 * @param timeout fetch's timeout
 * @returns Promise
 */
fetchWithTimeout(domain, [options], [timeout])
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });
```



## Contributing

Pull requests and suggestions are more than welcome!