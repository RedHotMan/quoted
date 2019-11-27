import styled from 'styled-components';

export const Card = styled.a`
  color: #333
  text-align: left;
  border: 1px solid #dadee4;
  display: flex;
  width: 40rem;
  flex-direction: column;
  box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
  margin-bottom: 0.7rem;
  text-decoration: none;
  transition: ease 0.5s;

  &:hover {
    background-color: #3d5466;
    color: #fff;
  }
}
`;

export const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  align-items: center;
`;

export const CardBody = CardHeader;

export const CardFooter = styled.div`
  padding: 1.5rem 1.5rem;
`;

export const Avatar = styled.figure`
  border-radius: 50%;
  font-size: 1.4rem;
  font-weight: 300;
  height: 3.2rem;
  line-height: 1;
  margin: 0 20px 0 0;
  position: relative;
  vertical-align: middle;
  width: 3.2rem;
  float: left;
`;

export const AvatarImage = styled.img.attrs(({ src }) => ({
  src: src || 'https://avatars3.githubusercontent.com/u/10242454?s=460&v=4',
}))`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export const CardTitle = styled.h4`
  font-size: 1rem;
  line-height: 1;
  margin: 0;
`;

export const CardMeta = styled.p`
  color: #b3b3b3;
  font-size: 0.8em;
  margin: 0;
`;

export const FooterIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
`;
