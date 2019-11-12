import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputText = styled.input`
  font-size: 1em;
  border-left: 2px solid #255FFF;
  border-bottom: 2px solid #255FFF;
  border-top: 2px solid #255FFF;
  border-right: 1px solid #255FFF;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  width: 400px;
  padding: 1em;
  color: #255FFF;
  outline: none 0;
  ::placeholder {
    color: #255FFF
  }
`;

export const SubmitButton = styled.input.attrs(({ btnLabel }) => ({
  type: "submit",
  value: btnLabel || 'Submit button'
}))`
  font-size: 1em;
  font-weight: 900;
  border-left: 1px solid #255FFF;
  border-bottom: 2px solid #255FFF;
  border-top: 2px solid #255FFF;
  border-right: 2px solid #255FFF;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 1em;
  color: #fff;
  background-color: #255FFF;
  outline: none 0;
  cursor: pointer;
`;
