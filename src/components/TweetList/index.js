import React from 'react';
import { AiFillHeart, AiOutlineRetweet } from 'react-icons/ai';
import moment from 'moment';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  AvatarImage,
  CardTitle,
  CardMeta,
  FooterIcon,
} from './style';

const TweetList = props => {
  const cards = [];

  props.tweets.forEach((tweet, index) => {
    cards.push(
      <Card
        key={index}
        href={`https://twitter.com/${tweet.user.id_str}/statuses/${tweet.id_str}`}
        target="_blank"
        rel="noopener norefer"
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
    <ul>
      {cards}
    </ul>
  )
}

export default TweetList;
