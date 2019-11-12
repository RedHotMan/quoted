import React from 'react';
import Emoji from '../Emoji';
import { FooterWrapper, Link } from './style';

const Footer = () => {
  return (
    <FooterWrapper>
      Crafted with 
      {' '}
      <Emoji symbol="❤️" label="love"/>
      {' '}
      by
      {' '}
      <Link href="https://github.com/RedHotMan" rel="noopener noreferer" target="_blank">@RedHotMan</Link>
    </FooterWrapper>
  )
}

export default Footer;
