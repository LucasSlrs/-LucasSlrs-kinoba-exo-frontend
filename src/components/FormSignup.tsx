import React from "react";
import StyledFormLogin from "../elements/StyledFormSignup";
import { UserCredential } from "../interfaces/InterfaceLogs";
import IndexImages from "../components/IndexImages";
import APIHelper from "../api/apiHelper";
import { Link } from "react-router-dom";

const FormSignup = (props: any): JSX.Element => {
  const [state, setState] = React.useState<UserCredential>({
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
  });

  const { first_name, last_name, phone_number, password } = state;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    const inputName: string = e.target.name;

    setState((prevState: UserCredential) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    state: UserCredential
  ) => {
    e.preventDefault();
    await APIHelper.signup(state)
      .then((data) => {
        console.log(data);
        props.history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <IndexImages>
      <StyledFormLogin>
        <label className="label">
          <input
            type="text"
            className="input"
            name="first_name"
            placeholder="First name"
            value={first_name}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <input
            type="text"
            className="input"
            name="last_name"
            placeholder="Last name"
            value={last_name}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <input
            type="text"
            className="input"
            name="phone_number"
            placeholder="Phone number"
            value={phone_number}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button onClick={(e) => handleSubmit(e, state)} className="loginBtn">
          Signup
        </button>
        <div>
          <Link to={"/login"}>Already registered? Login here</Link>
        </div>
      </StyledFormLogin>
    </IndexImages>
  );
};
export default FormSignup;
