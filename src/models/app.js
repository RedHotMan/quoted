import axios from 'axios';

const INITIAL_STATE = {
  tweets: [],
  displayList: false,
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
      await axios.get(`/api/getQuotesFromTweet/${tweetInfo.userId}/${tweetInfo.tweetId}`)
        .then(({data}) => {
          dispatch.app.getTweets(data.statuses);
        });
    },
  })
}

export default app;
