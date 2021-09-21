import React, { useState } from "react";
import StyledFormLogin from "../elements/StyledFormSignup";
import IndexImages from "../components/IndexImages";
import { LoginCredential } from "../interfaces/Interface";
import { Link } from "react-router-dom";
import APIHelper from "../api/apiHelper";
import { toast } from "react-toastify";

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
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    state: LoginCredential
  ) => {
    e.preventDefault();
    await APIHelper.login(state)
      .then((data) => {
        const parseResponse = data;
        localStorage.setItem("token", parseResponse.token);
        props.setAuth(true); // user is auth so redirect to dashboard
        toast.success("Welcome back!");
      })
      .catch((err) => {
        toast.error("Invalid credentials. Email or password is incorrect");
        console.error(err);
      });
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
