import React, { Component } from 'react';
//Import router connecions
import { HashRouter as Router, Route} from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';

//import components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';


class App extends Component {

  render() {
    return (
      <div className="feedbackApp">
        <Router>
          <Route exact path='/' component={Feeling} />
          <Route path='/understanding' component={Understanding} />
          <Route path='/support' component={Support} />
          <Route path='/comments' component={Comments} />
          <Route path='/review' component={Review} />
          <Route path='/submit' component={Submit} />
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
