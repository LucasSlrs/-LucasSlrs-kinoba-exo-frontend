import React from "react";

import StyledRight from "../elements/StyledRight";
import RightImg from "./RightImg";
import Chat from "./Chat";

interface IProps {
  bChatClicked: boolean;
  chatSelected: number;
  userConnected: number;
}

const messageText: string =
  "This is a WhatsApp Clone made by Lucas Souleyrasse using React and Node.js. Click on a conversation to display a chat";
const Right = (props: IProps): JSX.Element => {
  return (
    <StyledRight>
      {!props.bChatClicked ? (
        <RightImg messageText={messageText} />
      ) : (
        <Chat
          selectedChat={props.chatSelected}
          userConnected={props.userConnected}
        />
      )}
    </StyledRight>
  );
};
export default Right;
