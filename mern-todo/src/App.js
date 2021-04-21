import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import LoginTodo from "./components/login-todo.component";
import EditTodo from "./components/edit-todo.component";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li><Link to="/" className="navbar-brand">Hello Punitha Subramani</Link></li>
                <li>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/> 
          <Switch>
          <Route path="/" pattern="/" exact component={CreateTodo} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/login" component={LoginTodo} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;