import React, { useState } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import { onDelCard } from '../../actions';

import './card.sass';
import CardEditBlock from '../card-edit/card-edit';
import { Draggable } from 'react-beautiful-dnd';

const Card = props => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Draggable draggableId={`card-${props.colIndex}-${props.cardIndex}`} index={props.cardIndex}>
      {provided => (
        <div className='card' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Icon onClick={() => props.onDelCard(props.colIndex, props.cardIndex)} className='card-btn card-close' type='close' />
          <Icon onClick={() => setIsEdit(!isEdit)} className='card-btn card-edit' type='edit' />
          {isEdit ? <CardEditBlock colIndex={props.colIndex} cardIndex={props.cardIndex} setIsEdit={setIsEdit} label={props.label} /> : <span>{props.label}</span>}
        </div>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onDelCard: (colIndex, cardIndex) => dispatch(onDelCard(colIndex, cardIndex))
  };
};

export default connect(null, mapDispatchToProps)(Card);
