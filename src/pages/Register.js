import { useState } from "react";
import { Link, useLocation } from "wouter";

import { Form } from "react-final-form";

import CustomField from "../components/CustomField";

import { registerUser } from "../services/auth";

import { authValidator } from "../libs/validator";

import "../styles/form.css";

const Register = () => {
  const [subErr, setSubErr] = useState();

  const [setLocation] = useLocation();

  const onSubmit = async (values) => {
    const res = await registerUser(values);

    if (res.error) {
      setSubErr(res.error);
    } else {
      setLocation("/login");
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
              Create account
            </button>

            <Link href="/login" className="link active">
              Already have an account
            </Link>
          </div>
        </form>
      )}
    />
  );
};

export default Register;
