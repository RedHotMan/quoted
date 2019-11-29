const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const Twitter = require('./twitter').Twitter;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/api/getQuotesFromTweet/:userId/:tweetId', (req, res) => {
  const params = req.params;

  Twitter.get(
    'search/tweets',
    { q: `-from:${params.userId} url:${params.tweetId} -filter:retweets`, count: 100 },
    function(err, data, response) {
      res.send(JSON.stringify(data));
    },
  );
});

app.listen(3001, () => console.log('Express server is running on localhost:3001'));
