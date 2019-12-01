require('dotenv').config({ path: '.env' });

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const Twitter = require('./twitter').Twitter;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve('build')));

  app.get('/', function(req, res) {
    res.sendFile(path.resolve('build', 'index.html'));
  });
}

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

app.listen(process.env.PORT || 3003, () => console.log('Express server is running on localhost:3003'));
