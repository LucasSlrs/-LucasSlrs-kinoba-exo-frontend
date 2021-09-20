import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import StyledHeader from "../elements/StyledHeader";

const Header = (props: any) => {
  console.log(props.props.state);
  return (
    <StyledHeader>
      <img
        className="avatar"
        src={props.props.state.profile_picture}
        alt="user pic"
      />
      <p>Hello {props.props.state.first_name}</p>
      <FontAwesomeIcon
        className="greyIcon"
        icon={faSignOutAlt}
        onClick={() => props.props.props.setAuth(false)}
      />
    </StyledHeader>
  );
};
export default Header;
