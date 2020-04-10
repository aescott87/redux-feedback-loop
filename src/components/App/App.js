import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';

//import components
import Header from '../Header/Header'

class App extends Component {

  state = {
    feeling: 0
  }

  render() {
    return (
      <div className="feedbackFeeling">
        <Header />
        <br/>
        <h2>How are you feeling today?</h2>
        <form>
          <label>Please select below. 1 = "Terrible", 5 = "Great!"</label>
          <select name="feeling">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default connect()(App);
