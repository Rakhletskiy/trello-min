import React from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';

import { onDelCard } from '../actions';

import './card.sass';

const Card = props => {
    return ( 
        <div className="card">
            {props.label}
            <Icon onClick={() => props.onDelCard(props.colIndex, props.cardIndex)} className="close-card-btn" type="close" />
        </div>
     );
}

const mapDispatchToProps = dispatch => {
    return {
        onDelCard: (colIndex, cardIndex) => dispatch(onDelCard(colIndex, cardIndex))
    }
}
 
export default connect(null, mapDispatchToProps)(Card);