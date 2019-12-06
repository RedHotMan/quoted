import styled from 'styled-components';

export const CardList = styled.ul`
  padding: 0;
  margin: 5rem 0;
`;

export const Card = styled.li`
  color: #333
  text-align: left;
  border: 1px solid #dadee4;
  display: flex;
  width: 40rem;
  flex-direction: column;
  box-shadow: 0 0.25rem 1rem rgba(48,55,66,.15);
  margin-bottom: 0.7rem;
  transition: ease 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #3d5466;
    color: #fff;
  }

  @media screen and (max-width: 40rem) {
    width: auto;
    margin-right: 1rem;
    margin-left: 1rem;
  }
}
`;

export const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  align-items: center;
`;

export const CardBody = styled.div`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

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

export const ResetFloatingButton = styled.button`
  display: flex;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  color: #255fff;
  background-color: #255fff;
  position: fixed;
  color: #fff;
  border: 0;
  top: 3rem;
  right: 3rem;
  box-shadow: 0 0.25rem 1rem rgba(37, 95, 255, 0.4);
  cursor: pointer;
  outline: none 0;
`;

export const ResetButton = styled.button`
  font-size: 0.7em;
  font-weight: 900;
  border-radius: 3px;
  border: 0;
  padding: 1em;
  color: #fff;
  background-color: #255FFF;
  outline: none 0;
  cursor: pointer;
`;

export const TweetMedia = styled.div`
  background-image: url(${props => props.mediaSrc || ''});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
`;
