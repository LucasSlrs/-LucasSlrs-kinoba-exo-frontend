import React, { useEffect, useState } from "react";
import APIHelper from "../api/apiHelper";

import StyledHeader from "../elements/StyledHeader";

import Avatar from "@mui/material/Avatar";

interface User {
  user_id: number;
  first_name: string;
  last_name: string;
  profile_picture: string;
}
interface IProps {
  chatSelected: number;
}
const HeaderRight = (props: IProps) => {
  const [userSelected, setUserSelected] = useState<User>({
    user_id: 0,
    first_name: "",
    last_name: "",
    profile_picture: "",
  });
  useEffect(() => {
    APIHelper.getUserById(props?.chatSelected).then((response) =>
      setUserSelected({
        user_id: response.user_id,
        first_name: response.first_name,
        last_name: response.last_name,
        profile_picture: response.profile_picture,
      })
    );
  }, []);

  return (
    <StyledHeader>
      <div style={{ display: "flex", alignItems: "center", margin: "15px" }}>
        <Avatar
          alt={userSelected.first_name + " " + userSelected.last_name}
          src={userSelected.profile_picture}
          sx={{
            width: "4.9rem",
            height: "4.9rem",
          }}
        />
        <span style={{ margin: "15px" }}>
          {" " + userSelected.first_name + " " + userSelected.last_name}
        </span>
      </div>
    </StyledHeader>
  );
};
export default HeaderRight;
