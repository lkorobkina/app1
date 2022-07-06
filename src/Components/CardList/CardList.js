import React, {useState} from "react";
import Card from "../Card/Card";
import './CardList.css';


const CardList = ({items, isDisableMode, changeActiveHandler}) => {
    return (
        <div className="cards">
            {items.map(card => <Card key={card.id} cardCaption={card.caption} cardText={card.text} isDisableMode={isDisableMode} id={card.id} changeActiveHandler={changeActiveHandler} isActive={card.isActive}/>)}
        </div>
    );
}

export default CardList;