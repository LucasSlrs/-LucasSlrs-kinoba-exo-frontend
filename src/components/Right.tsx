import React from "react";

import StyledRight from "../elements/StyledRight";
import RightImg from "./RightImg";

const messageText: string =
  "This is a WhatsApp Clone made by Lucas Souleyrasse using React and Node.js. Click on a conversation to display a chat";
const Right = (props: any): JSX.Element => {
  return (
    <StyledRight>
      <RightImg messageText={messageText} />
    </StyledRight>
  );
};
export default Right;
