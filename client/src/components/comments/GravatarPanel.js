import PropTypes from "prop-types";
import React from "react";
import Gravatar from "./Gravatar";
import UserLastActivityPopupContainer from "../../containers/UserLastActivityPopupContainer";

export default class GravatarPanel extends React.Component {
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
    const commonProps = {
      togglePopup,
      email
    };
    const gravatarProps = {
      ...commonProps
    };
    const popupContainerProps = {
      ...commonProps
    };
    return (
      <>
        <Gravatar {...gravatarProps} />
        {isPopupOpen && (
          <UserLastActivityPopupContainer {...popupContainerProps} />
        )}
      </>
    );
  }
}

Gravatar.propTypes = {
  email: PropTypes.string
};
