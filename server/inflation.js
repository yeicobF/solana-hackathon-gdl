const request = require('request');

var country = 'United States'
request.get({
  url: 'https://api.api-ninjas.com/v1/inflation?country=' + country,
  headers: {
    'X-Api-Key': 'A7IZSxsQw2oVEqnuDM8hNg==F8q4mZtcvhJoLIUp'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  else console.log(body)
});