import React, {Component, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import CardList from './Components/CardList/CardList.js';
import {cards} from "./Data";

const App = props => {

    const [isDisableMode, setIsDisableMode] = useState(false);

    const checkboxWatchOnlyHandler = () => {
        setIsDisableMode(!isDisableMode);
    }

    return (
        <main>
            <div>
                <Header name="HEADER"/>
                <div className="bolder">
                    <input className='cb' type="checkbox" onChange={checkboxWatchOnlyHandler}/>Только просмотр
                    <div className="cards">
                        <CardList items={cards} isDisableMode={isDisableMode}/>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default App;