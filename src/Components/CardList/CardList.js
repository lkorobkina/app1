import React from "react";
import Card from "../Card/Card";
import './CardList.css';
import WithLoadingDelay from "../WithLoadingDelay/WithLoadingDelay";


const CardList = ({items, isDisableMode, changeActiveHandler, changeLoadingHandler}) => {
    const NewCard = WithLoadingDelay(Card);
    return (
        <div className="cards">
            {items.map(card => card.isLoading ? <Card key={card.id} cardCaption={card.caption} cardText={card.text} isDisableMode={isDisableMode} id={card.id} changeActiveHandler={changeActiveHandler} changeLoadingHandler={changeLoadingHandler} isActive={card.isActive} isLoading={card.isLoading}/> : <NewCard key={card.id} cardCaption={card.caption} cardText={card.text} isDisableMode={isDisableMode} id={card.id} changeActiveHandler={changeActiveHandler} isActive={card.isActive} isloading={card.isLoading} changeLoadingHandler={changeLoadingHandler}/>)}
        </div>
    );
}

export default CardList;