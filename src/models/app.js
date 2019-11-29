const INITIAL_STATE = {
  tweets: [],
  displayList: false
}

const app = {
  state: INITIAL_STATE,
  reducers: {
    getTweets(state, tweets) {
      return {
        ...state,
        tweets: tweets,
        displayList: true,
      }
    },
    clear(state) {
      return { INITIAL_STATE }
    }
  },
  effects: dispatch => ({
    async getTweetQuotes(tweetInfo) {
      await fetch(`/api/getQuotesFromTweet/${tweetInfo.userId}/${tweetInfo.tweetId}`)
        .then(response => response.json())
        .then(data => dispatch.app.getTweets(data.statuses));
    },
  })
}

export default app;
