import React, {useState} from "react";
import Card from "../Card/Card";
import './CardList.css';


const CardList = props => {
    return (
        <div className="cards">
            {props.items.map(card => <Card key={card.id} caption={card.caption} text={card.text} isDisableMode={props.isDisableMode} id={card.id} changeActiveHandler={props.changeActiveHandler}/>)}
        </div>
    );
}

export default CardList;