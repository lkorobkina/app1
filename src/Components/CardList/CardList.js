import React, {useState} from "react";
import Card from "../Card/Card";
import './CardList.css';


const CardList = props => {
    return (
        <div className="cards">
            {props.items.map(cards => <Card caption={cards.caption} text={cards.text} isDisableMode={props.isDisableMode} id={cards.id}/>)}
        </div>
    );
}

export default CardList;