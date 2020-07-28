import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, Link } from "reactstrap";


import CareerForm from "./components/CareerForm";
import EditCareer from './components/EditCareer';
import Home from './components/Home';

class App extends Component {

  render() {
    const mystyles = {
      color: "white"
    }

    return (
      <Router>
        <div className="container-fluid">
          <Navbar color="dark" light expand="md">
            <NavbarBrand className="logo" style={mystyles} href="/">quebeta</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavbarBrand href="/" className="brand">Career Page for Quebeta</NavbarBrand>
              <NavItem className="navbarItemRight">
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem className="navbarItemRight">
                <NavLink href="/careerForm">Career</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Route path="/" exact component={Home}></Route>
          <Route path="/careerForm" component={CareerForm}></Route>
          <Route path="/edit/:id" component={EditCareer}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
