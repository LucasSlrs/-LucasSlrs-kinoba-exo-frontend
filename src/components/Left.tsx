import React from "react";
import StyledLeft from "../elements/StyledLeft";
import Header from "./Header";

const icons: string[] = ["circle-notch", "comment-alt", "ellipsis-v"];
const Left = (props: any) => {
  return (
    <StyledLeft>
      <Header icons={icons} iconClass="greyIcon" props={props} />
    </StyledLeft>
  );
};
export default Left;
