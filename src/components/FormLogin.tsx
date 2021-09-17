import React, { useState } from "react";
import StyledFormLogin from "../elements/StyledFormSignup";
import IndexImages from "../components/IndexImages";
import { LoginCredential } from "../interfaces/InterfaceLogs";
import { Link } from "react-router-dom";

const FormLogin = (props: any) => {
  const [state, setState] = useState<LoginCredential>({
    phone_number: "",
    password: "",
  });

  const { phone_number, password } = state;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue: string = e.target.value;
    const inputName: string = e.target.name;

    setState((prevState: LoginCredential) => ({
      ...prevState,
      [inputName]: inputValue,
    }));
  };
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    state: LoginCredential
  ) => {
    e.preventDefault();
    props.history.push("/dashboard");
  };
  return (
    <IndexImages>
      <StyledFormLogin>
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
          Login
        </button>
        <div>
          <Link to={"/"}>Register</Link>
        </div>
      </StyledFormLogin>
    </IndexImages>
  );
};
export default FormLogin;
