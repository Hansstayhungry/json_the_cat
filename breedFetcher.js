const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request.get(apiUrl, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, "no result");
      } else {
        const desc = data[0].description;
        callback(null, desc);
      }
    }
  });
};


module.exports = { fetchBreedDescription };