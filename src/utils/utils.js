export const isTweetUrl = (url) => {
  let validUrl = true;
  const expression = new RegExp(/^(?:http(s)?:\/\/)?twitter.com\/[\w.-]*\/status\/[0-9]*/gm);

  try {
    Boolean(new URL(url))
  } catch (e) {
    validUrl = false;
  }

  return expression.test(url) || validUrl;
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
