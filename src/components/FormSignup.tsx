import React from "react";
import StyledFormLogin from "../elements/StyledFormSignup";
import { UserCredential } from "../interfaces/InterfaceLogs";
import IndexImages from "../components/IndexImages";

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
            placeholder="Phone Number"
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
        <button onClick={() => props.onSignup(state)} className="loginBtn">
          Signup
        </button>
      </StyledFormLogin>
    </IndexImages>
  );
};
export default FormSignup;
