import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inputStyle } from '../../styles/commonStyles';

const StyledInput = styled.input`
  ${inputStyle};
  border: none;
  margin: 0;
  width: 100%;
  :focus {
    outline: none;
  }
`;

export default function FilterField({ onChange, value }) {
  const inputProps = {
    onChange,
    value,
    placeholder: 'Filter',
    spellCheck: 'false'
  };
  return <StyledInput {...inputProps} />;
}

FilterField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};
