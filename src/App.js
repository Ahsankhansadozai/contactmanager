import React from "react";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/Layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/Pages/About";
import PageNotFound from "./components/Pages/PageNotFound";
import Test from "./components/Test/Test";

import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="container">
          <div className="App">
            <Header branding="Contact Manager" />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/about" component={About} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
