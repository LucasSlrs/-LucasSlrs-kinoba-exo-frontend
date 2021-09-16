import { UserCredential } from "../interfaces/InterfaceLogs";
import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
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
};
export default APIHelper;
