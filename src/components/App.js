import { Route, useLocation } from "wouter";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import ActiveLink from "./ActiveLink";
import Customers from "../pages/Customers";

const App = () => {
  const [setLocation] = useLocation();

  const jwt = sessionStorage.getItem("jwt");

  const handleLogout = () => {
    sessionStorage.removeItem("jwt");

    setLocation("/");
  };

  return (
    <div className="column app">
      <header className="header">
        <nav data-testid="navbar">
          <ActiveLink href="/" data-testid="home-link">
            Home
          </ActiveLink>
          {jwt ? (
            <ActiveLink href="/customers">Customers</ActiveLink>
          ) : (
            <ActiveLink href="/login" data-testid="login-link">
              Login
            </ActiveLink>
          )}
        </nav>

        {jwt && (
          <button className="btn active" onClick={handleLogout}>
            Log out
          </button>
        )}
      </header>

      <article className="column file-zone space">
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/customers" component={Customers} />
      </article>
    </div>
  );
};

export default App;
