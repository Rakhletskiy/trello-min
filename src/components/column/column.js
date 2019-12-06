import React from 'react';
import { Icon } from 'antd';
import { Droppable } from 'react-beautiful-dnd';

import { connect } from 'react-redux';
import { onDelCol } from '../../actions';

import './column.sass';
import ButtonAdd from '../button-add/buton-add';
import Card from '../card/card';

const Column = props => {
  return (
    <div className={!props.empty ? 'column' : !props.isAddingColumn ? 'column empty' : 'column add-column'}>
      {!props.empty ? (
        <div>
          <header className='column__title'>{props.title}</header>

          <Droppable type='CARDS' droppableId={`column-${props.index}`}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className='column__inner'>
                  <div className='column__items'>
                    {props.cards.map((card, index) => (
                      <Card key={index} colIndex={props.index} cardIndex={index} label={card}></Card>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              </div>
            )}
          </Droppable>
          <ButtonAdd text={'Add new card'} index={props.index} />
          <Icon onClick={() => props.onDelCol(props.index)} className='close-column-btn' type='close' />
        </div>
      ) : (
        <div>
          {!props.isAddingColumn && (
            <div>
              <header className='column__title'>пвава</header>
              <Icon className='close-column-btn' type='close' />
            </div>
          )}
          <ButtonAdd text={props.isAddingColumn ? 'Add new column' : 'Add new card'} isAddingColumn={props.isAddingColumn && true} index={props.index} />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onDelCol: colIndex => dispatch(onDelCol(colIndex))
  };
};

export default connect(null, mapDispatchToProps)(Column);
