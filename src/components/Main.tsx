import React, { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";
import StyledMain from "../elements/StyledMain";
import APIHelper from "../api/apiHelper";

interface IProps {
  history: {};
  location: {};
  match: {};
  setAuth: (boolean: boolean) => void;
}
interface User {
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_picture: string;
  user_id: number;
}

const Main = (props: IProps): JSX.Element => {
  const [user, setUser] = useState<User>({
    first_name: "",
    last_name: "",
    phone_number: "",
    profile_picture: "",
    user_id: 0,
  });
  const getUser = async () => {
    await APIHelper.getUser()
      .then((data) => {
        setUser({
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: data.phone_number,
          profile_picture: data.profile_picture,
          user_id: data.user_id,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const [bChatClicked, setbChatCliked] = useState(false);
  const [chatSelected, setChatSelected] = useState(0);
  return (
    <StyledMain>
      <Left
        state={user}
        props={props}
        setAuth={props.setAuth}
        bChatClicked={setbChatCliked}
        setChatSelected={setChatSelected}
      />
      <Right
        bChatClicked={bChatClicked}
        chatSelected={chatSelected}
        userConnected={user.user_id}
      />
    </StyledMain>
  );
};

export default Main;
