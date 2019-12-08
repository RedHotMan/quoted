import React, { lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import InputPanel from '../InputPanel';
import Loader from '../../components/Loader';
import { Container } from './style';
const TweetList = lazy(() => import('../../components/TweetList'));

const Layout = props => {
  const tweets = useSelector(state => state.app.tweets);
  const displayList = useSelector(state => state.app.displayList);

  const dispatch = useDispatch();
  const { clear } = dispatch.app;

  return (
    <Suspense fallback={<Loader/>}>
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
    </Suspense>
  );
}

export default Layout;
