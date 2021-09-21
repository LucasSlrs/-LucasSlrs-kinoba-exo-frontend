import React, { Fragment, useEffect, useState } from "react";
import APIHelper from "../api/apiHelper";
import HeaderRight from "./HeaderRight";
import Chip from "@mui/material/Chip";

interface IProps {
  selectedChat: number;
  userConnected: number;
}
interface AxiosReq {
  items?: [];
}
interface Messages {
  message?: string;
  message_id?: string;
  message_from?: number;
  message_to?: number;
  message_date?: string;
}
const Chat = (props: IProps) => {
  const [chatFromUserConnected, setChatFromUserConnected] = useState<AxiosReq>({
    items: [],
  });
  const [chatFromContact, setChatFromContact] = useState<AxiosReq>({
    items: [],
  });

  useEffect(() => {
    APIHelper.getMessagesSendedTo(props.userConnected, props.selectedChat).then(
      (response) => {
        setChatFromUserConnected({
          items: response,
        });
      }
    );
    APIHelper.getMessagesSendedTo(props.selectedChat, props.userConnected).then(
      (response) => {
        setChatFromContact({
          items: response,
        });
      }
    );
  }, []);
  return (
    <Fragment>
      <HeaderRight chatSelected={props.selectedChat} />
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "end" }}
      >
        {chatFromUserConnected.items?.map((el: Messages) => {
          return (
            <div key={el.message_id}>
              <Chip label={el.message} sx={{ margin: "15px" }} />
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        {chatFromContact.items?.map((el: Messages) => {
          return (
            <div key={el.message_id}>
              <Chip label={el.message} sx={{ margin: "15px" }} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default Chat;
