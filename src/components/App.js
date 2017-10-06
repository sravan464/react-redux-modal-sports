/**
 * Created by sravankumarganji on 9/17/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HomePage from "./home/HomePage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <HomePage/>
        </div>
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
