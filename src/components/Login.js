import { useFormFields } from "../libs/form";

import { loginUser } from "../services/auth";

const Login = () => {
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(fields).then((res) => {
      sessionStorage.setItem("jwt", res.token);
    });
  };

  return (
    <form className="file space" onSubmit={handleSubmit}>
      <div className="column">
        <label>username</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldChange}
        />
      </div>

      <div className="column">
        <label>password</label>
        <input
          type="password"
          name="password"
          value={fields.password}
          onChange={handleFieldChange}
        />
      </div>

      <button>Login</button>
    </form>
  );
};

export default Login;
