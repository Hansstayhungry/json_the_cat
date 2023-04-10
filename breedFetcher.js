const request = require('request');

const name = process.argv[2];

const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;

request.get(apiUrl, function(error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else if (body === "[]") {
    console.log("No result");
  } else {
    const data = JSON.parse(body);
    console.log(data);
  }
});