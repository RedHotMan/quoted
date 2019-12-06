export const isTweetUrl = (url) => {
  const expression = new RegExp(/^(?:http(s)?:\/\/)?twitter.com\/[\w.-]*\/status\/[0-9]*/gm);
  return expression.test(url);
}

export const getUserIdAndTweetIdFromUrl = url => {
  // Remove "https://twitter.com/"" from url
  url = url.replace('https://twitter.com/', '');
  // Remove "status/"" from url
  url = url.replace('status/', '');
  // Split url by "/"
  const urlTab = url.split('/');

  // Get userID and TweetId
  const userId = urlTab[0];
  let tweetId = urlTab[1];

  // Remove parameters if exists in tweetId
  if (tweetId.includes("?")) {
    tweetId = tweetId.replace(/\?.*/, '');
  }

  return {
    "userId": userId,
    "tweetId": tweetId
  }
}
