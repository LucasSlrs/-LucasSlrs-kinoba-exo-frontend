import React, { useEffect, useState } from "react";
import StyledLeft from "../elements/StyledLeft";
import Header from "./Header";
import APIHelper from "../api/apiHelper";
import StyledLeftSide from "../elements/StyledLeftSide";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

interface AxiosReq {
  items?: [];
}
interface ListOfUser {
  user_id: number;
  first_name: string;
  last_name: string;
  profile_picture: string;
}
interface IProps {
  bChatClicked: (boolean: boolean) => void;
  props: {};
  setChatSelected: (number: number) => void;
  state: {};
  setAuth: (boolean: boolean) => void;
  userConnected: number;
}
const icons: string[] = ["faSignOutAlt"];

const Left = (props: IProps | any) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    props.setChatSelected(index);
    props.bChatClicked(true);
  };

  const [data, setData] = useState<AxiosReq>({
    items: [],
  });
  useEffect(() => {
    APIHelper.getListOfUSers().then((response) => {
      setData({
        items: response,
      });
    });
  }, []);

  return (
    <StyledLeft>
      <Header
        icons={icons}
        iconClass="greyIcon"
        props={props}
        setAuth={props.setAuth}
      />
      <StyledLeftSide>
        <ul>
          {data.items
            ?.filter((user: ListOfUser) => user.user_id !== props.userConnected)
            .map((el: ListOfUser) => {
              return (
                <Box
                  key={el.user_id}
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                      selected={selectedIndex === el.user_id}
                      onClick={(event) =>
                        handleListItemClick(event, el.user_id)
                      }
                    >
                      <Avatar
                        alt={el.first_name + " " + el.last_name}
                        src={el.profile_picture}
                        sx={{
                          width: "4.9rem",
                          height: "4.9rem",
                        }}
                      />
                      <ListItemText
                        sx={{ margin: "28px" }}
                        primary={" " + el.first_name + " " + el.last_name}
                      />
                      <Divider />
                    </ListItemButton>
                  </List>
                </Box>
              );
            })}
        </ul>
      </StyledLeftSide>
    </StyledLeft>
  );
};
export default Left;
