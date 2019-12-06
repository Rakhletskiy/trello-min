import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { Icon, Button } from 'antd';

import { setNewCardText } from '../../actions';

import './card-edit.sass';

const CardEditBlock = props => {
  const [inputText, setInputText] = useState(props.label);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      node.focus();
      node.setSelectionRange(0, node.value.length);
    }
  }, []);

  return (
    <div className='card-edit-block'>
      <textarea ref={measuredRef} onChange={e => setInputText(e.target.value)} value={inputText} rows='3'></textarea>
      <div className='btn-wrapper'>
        <Button
          onClick={() => {
            props.setNewCardText(inputText, props.colIndex, props.cardIndex);
            props.setIsEdit(false);
          }}
          className='card-edit-block-btn'
          type='primary'
          size='small'
        >
          OK
        </Button>
        <Icon
          onClick={() => {
            setInputText(props.label);
            props.setIsEdit(false);
          }}
          className='card-edit-block-close'
          type='close'
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setNewCardText: (text, colIndex, cardIndex) => dispatch(setNewCardText(text, colIndex, cardIndex))
  };
};

export default connect(null, mapDispatchToProps)(CardEditBlock);
