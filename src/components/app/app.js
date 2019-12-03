import React from 'react';
import './app.sass';
import { connect } from 'react-redux';

import Column from '../column/column';

const App = props => {
  return (
    <div className="App">
      <Column />
      <Column />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(App);
