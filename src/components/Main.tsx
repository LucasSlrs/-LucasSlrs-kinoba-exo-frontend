import React, { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import StyledMain from "../elements/StyledMain";
import APIHelper from "../api/apiHelper";

const Main = (props: any) => {
  const [name, setName] = useState("");
  const getUser = async () => {
    await APIHelper.getUser()
      .then((data) => {
        setName(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <StyledMain>
      <Left state={name} props={props} />
      <Right />
    </StyledMain>
  );
};

export default Main;
