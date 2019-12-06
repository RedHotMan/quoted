import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputText = styled.input`
  margin: 0 !important; 
  font-size: 1em;
  border-left: 2px solid #255FFF;
  border-bottom: 2px solid #255FFF;
  border-top: 2px solid #255FFF;
  border-right: 1px solid #255FFF;
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
  border-bottom-right-radius: 0 !important;
  border-top-right-radius: 0 !important;
  width: 400px;
  padding: 1em;
  color: #255FFF;
  outline: none 0;
  background-color: ${props => props.backgroundColor || 'transparent'}
  ::placeholder {
    color: #255FFF
  }
  @media screen and (max-width: 530px) {
    width: 200px;
  }

  @media screen and (max-width: 330px) {
    width: auto;
  }
`;

export const SubmitButton = styled.button`
  margin: 0 !important;
  font-size: 1em;
  font-weight: 900;
  border-left: 1px solid #255fff;
  border-bottom: 2px solid #255fff;
  border-top: 2px solid #255fff;
  border-right: 2px solid #255fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 1em;
  color: #255fff;
  background-color: ${props => (props.disabled ? '#C3D3FF' : '#fff')};
  outline: none 0;
  cursor: ${props => (props.disabled ? 'wait' : 'pointer')};
  transition: ease 0.5s;

  &:hover {
    color: #fff;
    background-color: ${props => (props.disabled ? '#C3D3FF' : '#255fff')};
  }

  @media only screen and (max-device-width: 480px) {
    color: #fff;
    background-color: ${props => (props.disabled ? '#C3D3FF' : '#255fff')};
  }
`;
