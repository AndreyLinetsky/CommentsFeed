import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import searchIcon from '../../assets/magnifyingGlass.svg';
import { buttonStyle } from '../../styles/commonStyles';

const StyledButton = styled.button`
  ${buttonStyle};
  background-color: transparent;
  margin: 0;
  padding: 0;
  width: 25px;
  align-items: center;
  justify-content: center;
  outline: none;

  ::before {
    content: '';
    width: 100%;
    height: inherit;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('${searchIcon}');
    padding: 0 6px;
  }
`;

export default function FilterButton({ onClick }) {
  return <StyledButton {...{ onClick }} />;
}

FilterButton.propTypes = {
  onClick: PropTypes.func
};
