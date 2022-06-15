import React, {useState} from "react";
import Card from "./Components/Card/Card";
import './List.css';

function setWatchOnly(b) {
    watchOnly = b;
}

export let watchOnly = false;

const List = props => {

    const checkboxWatchOnly = () => {
        setWatchOnly(!watchOnly);
    }

    return (
        <div>
            <input className='cb' type="checkbox" onChange={checkboxWatchOnly}/>Только просмотр
            <div className="cards">
                {props.items.map(cards => <Card caption={cards.caption} text={cards.text}/>)}
            </div>
        </div>
    );
}

export default List;