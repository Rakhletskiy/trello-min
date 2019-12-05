import React, { useState } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import { onDelCard } from '../../actions';

import './card.sass';
import CardEditBlock from '../card-edit/card-edit';

const Card = props => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className='card'>
      {isEdit ? <CardEditBlock colIndex={props.colIndex} cardIndex={props.cardIndex} setIsEdit={setIsEdit} label={props.label} /> : props.label}

      <Icon onClick={() => props.onDelCard(props.colIndex, props.cardIndex)} className='card-btn card-close' type='close' />
      <Icon onClick={() => setIsEdit(!isEdit)} className='card-btn card-edit' type='edit' />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onDelCard: (colIndex, cardIndex) => dispatch(onDelCard(colIndex, cardIndex))
  };
};

export default connect(null, mapDispatchToProps)(Card);
