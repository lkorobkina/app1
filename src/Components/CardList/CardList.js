import React, {useState} from "react";
import Card from "../Card/Card";
import './CardList.css';
import WithLoadingDelay from "../WithLoadingDelay/WithLoadingDelay";


const CardList = ({items, isDisableMode, changeActiveHandler}) => {
    const NewCard = WithLoadingDelay(Card);
    return (
        <div className="cards">
            {console.log(items)}
            {items.map(card => <NewCard key={card.id} cardCaption={card.caption} cardText={card.text} isDisableMode={isDisableMode} id={card.id} changeActiveHandler={changeActiveHandler} isActive={card.isActive}/>)}
        </div>
    );
}

export default CardList;