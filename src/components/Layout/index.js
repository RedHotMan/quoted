import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import InputPanel from '../../containers/InputPanel';
import { Container } from './style';

const Layout = () => {
  return (
    <Container>
      <Header />
      <InputPanel/>
      <Footer />
    </Container>
  )
}

export default Layout;
