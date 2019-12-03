import React from 'react';
import { Button } from "antd";
import 'antd/dist/antd.css';

import './button-add.sass'

const ButtonAdd = () => {
    return ( 
        <Button className="btn-add" icon="plus" block>Добавити ще одну карточку</Button>
     );
}
 
export default ButtonAdd;