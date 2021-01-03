import { Route } from "wouter";

import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import ActiveLink from "./ActiveLink";

const App = () => {
  return (
    <div className="column app">
      <header className="header">
        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/login">Login</ActiveLink>
        </nav>

        <Header />
      </header>

      <article className="column file-zone space">
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </article>
    </div>
  );
};

export default App;
