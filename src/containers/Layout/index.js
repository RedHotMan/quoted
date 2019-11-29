import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TweetList from '../../components/TweetList';
import InputPanel from '../InputPanel';
import { Container } from './style';

const Layout = props => {
  const tweets = useSelector(state => state.app.tweets);
  const displayList = useSelector(state => state.app.displayList);

  const dispatch = useDispatch();
  const { clear } = dispatch.app;

  return (
    <Container>
      {displayList ? (
        <TweetList tweets={tweets} clear={clear} />
      ) : (
        <>
          <Header />
          <InputPanel />
        </>
      )}
      <Footer />
    </Container>
  );
}

export default Layout;
