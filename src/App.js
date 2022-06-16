import React, {Component, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import List from './List.js';
import {cards} from "./Components/Data";

const App = props => {

    const [checked, setChecked] = useState(false);

    const checkboxWatchOnlyHandler = () => {
        setChecked(!checked);
    }

    return (
        <main>
            <div>
                <Header name="HEADER"/>
                <div className="bolder">
                    <input className='cb' type="checkbox" onChange={checkboxWatchOnlyHandler}/>Только просмотр
                    <div className="cards">
                        <List items={cards} checked={checked}/>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default App;