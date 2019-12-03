import React from "react";
import { Icon } from 'antd';

import "./column.sass";
import ButtonAdd from '../button-add/buton-add';
import Card from '../card/card';

const Column = props => {
    return (
        <div className='column'>
            <header className='column__title'>Список завданfffffffffffffffffffffsdfsdfsdfь</header>
            <Card />
            <Card />
            <ButtonAdd />
            <Icon className="close-column-btn" type="close" />
        </div>
    );
};

export default Column;
