import React from "react";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { Users } from "components/users";
import { Home } from "components/home";
import { Login } from "components/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main role="main" className="flex-shrink-0 main-area">
        <Container>
          <Switch>
            <Route path="/user">
              <Users />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
