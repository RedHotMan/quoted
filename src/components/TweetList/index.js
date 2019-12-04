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
} from './style';

const TweetList = props => {

  const openTweet = (tweetUserId, tweetId) => {
    window.open(`https://twitter.com/${tweetUserId}/statuses/${tweetId}`, '_blank');
  }

  const cards = [];

  props.tweets.forEach((tweet, index) => {
    cards.push(
      <Card
        key={index}
        onClick={() => openTweet(tweet.user.id_str, tweet.id_str)}
      >
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

        <CardBody>{tweet.text}</CardBody>

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
