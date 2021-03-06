import React from "react";
import StyledIndexImages from "../elements/StyledIndexImages";

interface IProps {
  children: {};
}

const IndexImages = (props: IProps): JSX.Element => {
  return (
    <StyledIndexImages>
      <img
        src="./images/whatsapp-bg-1.jpg"
        alt="whatsapp logo"
        className="rightImg--image"
      />
      <h3 className="rightImg--title">Keep your phone connected</h3>
      <div className="rightImg--div">
        <p className="rightImg--p"></p>
        <div className="rightImg--divider"></div>
      </div>
      {props.children}
    </StyledIndexImages>
  );
};
export default IndexImages;
