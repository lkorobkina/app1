import React, {useState} from "react";
import Card from "./Components/Card/Card";
import './List.css';

const List = props => {

    return (
        <div className="cards">
            {props.items.map(cards => <Card caption={cards.caption} text={cards.text} checked={props.checked}/>)}
        </div>
    );
}

export default List;