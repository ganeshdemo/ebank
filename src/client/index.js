import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Login from './pages/login';
import bankDetails from './pages/bankDetails';
import './App.css';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Home} />
        <Route path="/bankdetails" component={bankDetails} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
