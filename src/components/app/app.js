import React from "react";
import "./app.sass";
import { connect } from "react-redux";

import Column from "../column/column";

const App = props => {
    return (
        <div className='App'>
            {props.columns.map((column, index) => {
                console.log(column.cards)
              return <Column title={column.title} cards={column.cards} index={index} key={column.id} />
            })}
            <Column empty key={0.1}  />
            <Column empty isAddingColumn key={0.2} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        columns: state.columns
    };
};


export default connect(mapStateToProps)(App);
