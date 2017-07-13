const request = require('request-promise');


function getData(url) {
  const options = {
    uri: url,
    headers: {
      'User-Agent': 'Request-Promise',
    },
    json: true,
  };

  return request(options);
}

module.exports.getData = getData;
