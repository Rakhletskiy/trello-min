import React from 'react';
import './app.sass';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { fetchData, reorderCards } from '../../actions';

import Column from '../column/column';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  onDragEnd = result => {
    const { source, destination } = result;
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    this.props.reorderCards({
      source,
      destination
    });
  };

  render() {
    return (
      <div className='App'>
        {this.props.columns ? (
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.props.columns.map((column, index) => (
              <Column title={column.title} cards={column.cards} index={index} key={Math.random()} onReorder={reorderCards} />
            ))}
          </DragDropContext>
        ) : null}
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
    fetchData: () => dispatch(fetchData()),
    reorderCards: ({ source, destination }) => dispatch(reorderCards({ source, destination }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
