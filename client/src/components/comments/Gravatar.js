import { hashMd5 } from "../../utils/hash";
import PropTypes from "prop-types";
import styled from "styled-components";
import React from "react";

const StyledImage = styled.img`
  border-radius: 5px;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default function Gravatar({ email, togglePopup }) {  
  const hashedEmail = hashMd5(email);
  const imgSrc = `https://www.gravatar.com/avatar/${hashedEmail}?s=50`;
  const imgProps = {
    onClick: togglePopup,
    src: imgSrc
  };
  return <StyledImage {...imgProps} />;
}

Gravatar.propTypes = {
  email: PropTypes.string,
  togglePopup: PropTypes.func
};
