const app = {
  state: {
    tweets: []
  },
  reducers: {
    getTweets(state, tweets) {
      return {
        ...state,
        tweets: tweets
      }
    }
  },
  effects: dispatch => ({
    async getTweetQuotes(tweetInfo) {
      await fetch(`/api/getQuotesFromTweet/${tweetInfo.userId}/${tweetInfo.tweetId}`)
        .then(response => response.json())
        .then(data => dispatch.app.getTweets(data.statuses));
    }
  })
}

export default app;
