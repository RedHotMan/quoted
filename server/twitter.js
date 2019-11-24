const Twit = require('twit');

module.exports.Twitter = new Twit({
  consumer_key: process.env.REACT_APP_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_TWITTER_CONSUMER_SECRET,
  access_token: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.REACT_APP_TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});
