import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TweetList from '../../components/TweetList';
import InputPanel from '../InputPanel';
import { Container } from './style';

const Layout = props => {
  console.log(props);
  return (
    <Container>
      {props.tweets.length > 0 ? (
        <TweetList tweets={props.tweets} />
      ) : (
        <>
          <Header />
          <InputPanel />
        </>
      )}
      <Footer />
    </Container>
  )
}

const mapStateToProps = state => ({
  tweets: state.app.tweets,
});

export default connect(mapStateToProps, null)(Layout);
