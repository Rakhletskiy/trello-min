import React, { useState } from 'react';
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

import { onAddCard, onAddCol, addNewCardText } from '../../actions';

import './button-add.sass';

const ButtonAdd = props => {
  const [isAdding, setIsAdding] = useState(false);

  return isAdding ? (
    <div className={props.isAddingColumn ? 'adding-card card-is-adding-column' : 'adding-card'}>
      <textarea onChange={e => props.addNewCardText(e.target.value)} rows='3' placeholder='type here...' autoFocus></textarea>
      <div className='adding-card-btn-wrapper'>
        <Button
          onClick={() => (!props.isAddingColumn ? props.onAddCard(props.newCardText, props.index) : props.onAddCol(props.newCardText, setIsAdding))}
          className='adding-card-add'
          type='primary'
        >
          ADD
        </Button>
        <Icon onClick={() => setIsAdding(false)} className='adding-card-close' type='close' />
      </div>
    </div>
  ) : (
    <Button onClick={() => setIsAdding(true)} className={props.isAddingColumn ? 'btn-add btn-is-adding-column' : 'btn-add'} icon='plus' block>
      {props.text}
    </Button>
  );
};

const mapStateToProps = state => {
  return {
    newCardText: state.newCardText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddCard: (newCardText, index) => dispatch(onAddCard(newCardText, index)),
    addNewCardText: text => dispatch(addNewCardText(text)),
    onAddCol: (text, setIsAdding) => dispatch(onAddCol(text, setIsAdding))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAdd);
