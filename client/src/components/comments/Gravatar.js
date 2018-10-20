import { hashMd5 } from '../../utils/hash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React from 'react';
import UserLastActivityPopupContainer from '../../containers/UserLastActivityPopupContainer';

const StyledImage = styled.img`
  border-radius: 5px;
  margin-right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default class Gravatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false
    };
  }

  togglePopup = () => {
    this.setState({ isPopupOpen: !this.state.isPopupOpen });
  };

  render() {
    const {
      togglePopup,
      state: { isPopupOpen },
      props: { email }
    } = this;
    const hashedEmail = hashMd5(email);
    const imgSrc = `https://www.gravatar.com/avatar/${hashedEmail}?s=50`;
    const imgProps = {
      onClick: togglePopup,
      src: imgSrc
    };
    const popupContainerProps = {
      togglePopup,
      email
    }
    return (
      <>
        <StyledImage {...imgProps} />
        {isPopupOpen && <UserLastActivityPopupContainer {...popupContainerProps} />}
      </>
    );
  }
}

Gravatar.propTypes = {
  email: PropTypes.string
};
