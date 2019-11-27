import styled from 'styled-components';

export const Container = styled.section.attrs(props => ({}))`
  text-align: center;
  background-color: #fff;
  min-height: 100vh;
  display: ${props => props.display || 'flex'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
