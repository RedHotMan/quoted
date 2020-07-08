import React from 'react';
import { AiFillHeart, AiOutlineRetweet, AiOutlineClose } from 'react-icons/ai';
import moment from 'moment';
import {
  CardList,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  AvatarImage,
  CardTitle,
  CardMeta,
  FooterIcon,
  ResetFloatingButton,
  ResetButton,
  TweetMedia,
} from './style';

const TweetList = props => {

  const openTweet = (tweetUserId, tweetId) => {
    window.open(`https://twitter.com/${tweetUserId}/statuses/${tweetId}`, '_blank');
  }

  const cards = [];

  props.tweets.forEach((tweet, index) => {
    let tweetText = tweet.text;

    if (tweet.entities.urls) {
      tweet.entities.urls.forEach(url => {
        tweetText = tweetText.includes(url.url) ? tweetText.replace(url.url, '') : tweetText;
      });
    }

    if (tweet.entities.media) {
      tweet.entities.media.forEach(media => {
        tweetText = tweetText.includes(media.url) ? tweetText.replace(media.url, '') : tweetText;
      })
    }

    cards.push(
      <Card key={tweet.id_str} onClick={() => {openTweet(tweet.user.id_str, tweet.id_str); return false;}}>
        <CardHeader>
          <Avatar>
            <AvatarImage src={tweet.user.profile_image_url_https} />
          </Avatar>
          <div>
            <CardTitle>{tweet.user.name}</CardTitle>
            <CardMeta>
              @{tweet.user.screen_name} - {moment(new Date(tweet.created_at)).fromNow()}
            </CardMeta>
          </div>
        </CardHeader>

        <CardBody>
          {tweet.entities.media
            ? tweet.entities.media.map((media, index) => {
                return <TweetMedia key={index} mediaSrc={media.media_url} />;
              })
            : null}
          {tweetText}
        </CardBody>

        <CardFooter>
          <FooterIcon>
            <AiFillHeart style={{ marginRight: '5px' }} /> {tweet.favorite_count}
          </FooterIcon>
          <FooterIcon>
            <AiOutlineRetweet style={{ marginRight: '5px' }} /> {tweet.retweet_count}
          </FooterIcon>
        </CardFooter>
      </Card>,
    );
  });

  return (
    cards.length > 0 ? (
      <>
        <ResetFloatingButton onClick={props.clear}>
          <AiOutlineClose />
        </ResetFloatingButton>
        <CardList>{cards}</CardList>
      </>
    ) : (
      <>
        <h2>The specified tweet was not quoted…</h2>
        <ResetButton onClick={props.clear}>Retry with another tweet</ResetButton>
      </>
    )
  );
}

export default TweetList;
