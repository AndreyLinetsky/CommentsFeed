import styled from 'styled-components'

export const containerPadding = 'padding: 17px';

export const buttonStyle = `
cursor: pointer;
border: none;
:active {
  transform: translateY(1px);
}
`;

export const inputStyle = `
  padding: 7px 8px;
  margin: 5px 0px;
  font-family: inherit;
  font-size: 12px;
  border-width: 1px;
  :required {
    box-shadow: none;
  }
  ::placeholder {
    opacity: 0.5;
  }
`;

export const StyledErrorField = styled.div`
  color: red;
  font-size: 13px;
  margin-bottom: 5px;
`;