import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import StyledHeader from "../elements/StyledHeader";

interface IProps {
  iconClass: string;
  icons: string[];
  props: {
    state: {
      profile_picture: string;
    };
  };
  setAuth: (boolean: boolean) => void;
}
const Header = (props: IProps) => {
  return (
    <StyledHeader>
      {props.props.state.profile_picture === "" ? (
        <img
          className="avatar"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="no pic"
        />
      ) : (
        <img
          className="avatar"
          src={props.props.state.profile_picture}
          alt="user pic"
        />
      )}
      <FontAwesomeIcon
        className="greyIcon"
        icon={faSignOutAlt}
        onClick={() => props.setAuth(false)}
      />
    </StyledHeader>
  );
};
export default Header;
