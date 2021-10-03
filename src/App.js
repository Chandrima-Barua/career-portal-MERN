import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CareerType from "./components/career-data";
import Apply from "./components/apply";
import history from './components/history';
import SubmitForm from './components/submit.form';
import Confirmation from './components/confirmation';
import Final from './components/final';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={CareerType} />
                <Route path="/apply" component={Apply} />
                <Route path="/submitform" component={SubmitForm} />
                <Route path="/confirmation" component={Confirmation} />
                <Route path="/final" component={Final} />

            </Switch>
        </Router>
        </div>
    )
}
}

export default App;