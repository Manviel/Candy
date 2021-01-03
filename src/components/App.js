import { Route, useLocation } from "wouter";

import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import ActiveLink from "./ActiveLink";
import Customers from "./Customers";
import Register from "./Register";

const App = () => {
  const [location, setLocation] = useLocation();

  const jwt = sessionStorage.getItem("jwt");

  const handleLogout = () => {
    sessionStorage.removeItem("jwt");

    setLocation("/");
  };

  return (
    <div className="column app">
      <header className="header">
        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          {jwt ? (
            <ActiveLink href="/customers">Customers</ActiveLink>
          ) : (
            <ActiveLink href="/login">Login</ActiveLink>
          )}
        </nav>

        <Header />

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
