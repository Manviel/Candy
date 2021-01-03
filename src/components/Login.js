import { Link, useLocation } from "wouter";

import { useFormFields } from "../libs/form";

import { loginUser } from "../services/auth";

const Login = () => {
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: "",
  });

  const [location, setLocation] = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(fields);

    if (res.error) {
      console.error(res);
    } else {
      sessionStorage.setItem("jwt", res.token);

      setLocation("/customers");
    }
  };

  return (
    <form className="file space" onSubmit={handleSubmit}>
      <div className="column">
        <label>username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={fields.username}
          onChange={handleFieldChange}
        />
      </div>

      <div className="column">
        <label>password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={fields.password}
          onChange={handleFieldChange}
        />
      </div>

      <div className="column">
        <button className="btn primary form-control">Login</button>

        <Link href="/register" className="link active">
          Don't have an account
        </Link>
      </div>
    </form>
  );
};

export default Login;
