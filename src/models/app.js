import axios from 'axios';
import { store } from 'react-notifications-component';

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
          if (data.errors) {
            store.addNotification({
              title: 'Oops ! ⚠️',
              message: data.errors[0].message,
              type: 'danger',
              insert: 'top',
              container: 'top-right',
              animationIn: ["animated", "fadeIn"],
              animationOut: ["animated", "fadeOut"],
              width: 350,
              dismiss: {
                duration: 3000,
                onScreen: true,
                pauseOnHover: true,
              },
            });
            dispatch.app.clear();
          } else if (data.statuses.length === 0) {
            store.addNotification({
              title: 'Oh ! 🤷‍♂️',
              message: 'The specified tweet has not been quoted yet…',
              type: 'warning',
              insert: 'top',
              container: 'top-right',
              animationIn: ['animated', 'fadeIn'],
              animationOut: ['animated', 'fadeOut'],
              width: 350,
              dismiss: {
                duration: 3000,
                onScreen: true,
                pauseOnHover: true,
              },
            });
          }
          else {
            dispatch.app.getTweets(data.statuses);
          }
        });
    },
  })
}

export default app;
