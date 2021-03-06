import React from "react";
import StyledRightImg from "../elements/StyledRightImg";

interface textRight {
  messageText: string;
}

const RightImg = (props: textRight): JSX.Element => {
  return (
    <StyledRightImg>
      <img
        src="./images/whatsapp-bg-1.jpg"
        alt="whatsapp logo"
        className="rightImg--image"
      />
      <h3 className="rightImg--title">Keep your phone connected</h3>
      <div className="rightImg--div">
        <p className="rightImg--p">{props.messageText}</p>
        <div className="rightImg--divider"></div>
      </div>
    </StyledRightImg>
  );
};
export default RightImg;
