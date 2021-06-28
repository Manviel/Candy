import { useState } from "react";
import { Link, useLocation } from "wouter";

import { Form } from "react-final-form";

import CustomField from "../components/CustomField";

import { loginUser } from "../services/auth";

import { authValidator } from "../libs/validator";

import "../styles/form.css";

const Login = () => {
  const [subErr, setSubErr] = useState();

  const [setLocation] = useLocation();

  const onSubmit = async (values) => {
    const res = await loginUser(values);

    if (res.error) {
      setSubErr(res.error);
    } else {
      sessionStorage.setItem("jwt", res.token);

      setLocation("/customers");
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={authValidator}
      render={({ handleSubmit, submitting }) => (
        <form className="file space" onSubmit={handleSubmit}>
          <CustomField name="username" type="text" label="Username" />

          <CustomField name="password" type="password" label="Password" />

          {subErr && <p className="form-error">{subErr}</p>}

          <div className="column">
            <button className="btn primary form-group" disabled={submitting}>
              Login
            </button>

            <Link href="/register" className="link active">
              Don't have an account
            </Link>
          </div>
        </form>
      )}
    />
  );
};

export default Login;
