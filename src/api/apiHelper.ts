import { UserCredential, LoginCredential } from "../interfaces/Interface";
import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: { token: localStorage.token },
});

const errorHandler = (err: any) => {
  if (err.response) {
    console.error(err.response.data.message);
    throw err.response.data;
  }
  throw err;
};
const APIHelper = {
  service,
  signup(newuserInfo: UserCredential) {
    return service
      .post("/user/auth/signup", newuserInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  login(loginInfo: LoginCredential) {
    return service
      .post("/user/auth/login", loginInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  getUser() {
    return service
      .get("/user/dashboard")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  getListOfUSers() {
    return service
      .get("user/auth/listusers")
      .then((res) => res.data)
      .catch(errorHandler);
  },
  getUserById(user_id: number) {
    return service
      .get(`/user/auth/getuser/${user_id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  getMessagesSendedTo(message_from: number, message_to: number) {
    return service
      .get(
        `http://localhost:5000/user/message/messagesTo/${message_from}/${message_to}`
      )
      .then((res) => res.data)
      .catch(errorHandler);
  },
  isVerify() {
    return service
      .get("/user/auth/is-verify")
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
export default APIHelper;
