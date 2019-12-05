import React from 'react';
import './app.sass';
import { connect } from 'react-redux';

import { fetchData } from '../../actions';

import Column from '../column/column';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className='App'>
        {this.props.columns
          ? this.props.columns.map((column, index) => {
              return <Column title={column.title} cards={column.cards} index={index} key={Math.random()} />
            })
          : null}
        <Column empty isAddingColumn key={9999} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    columns: state.columns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
