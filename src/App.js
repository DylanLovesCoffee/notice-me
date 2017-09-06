import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavItem, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import RouteNavItem from "./components/RouteNavItem"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authToken: ""
    };

    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
  }

  userHasAuthenticated(token) {
    this.setState({authToken: token});
  }

  handleLogout = event => {
    this.userHasAuthenticated("");
  }

  render() {
    const childProps = {
      authToken: this.state.authToken,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">NoticeMeSenpai</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {
                this.state.authToken !== "" ?
                  <NavItem onClick={this.handleLogout}>Logout</NavItem>
                  :
                  [<RouteNavItem key={1} href="/signup">Signup</RouteNavItem>,
                  <RouteNavItem key={2} href="/login">Login</RouteNavItem>]
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
