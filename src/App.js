import React, {Component, useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import CardList from './Components/CardList/CardList.js';
import {cards} from "./Data";
import styled from "styled-components";

const App = props => {

    const [isDisableMode, setIsDisableMode] = useState(false);

    const [data, setData] = useState(cards);

    const changeActiveHandler = (id) =>
        setData(data => data.map(card => {
            if (card.id === id) {
                const prev = {...card};
                prev.isActive = !card.isActive;
                return prev;
            }

            return card;
        }));

    const checkboxWatchOnlyHandler = () => {
        setIsDisableMode(!isDisableMode);
    }

    const filterHandler = () => {
        setData(data.filter(card => !card.isActive))
    }

    return (
        <main>
            <div>
                <Header name="HEADER"/>
                <div className="bolder">
                    <button onClick={filterHandler}>Удалить выбранные
                        карточки
                    </button>
                    <CheckboxContainer>
                        <Checkbox onClick={checkboxWatchOnlyHandler} />
                        <label className='read-only__label' htmlFor='read-only'>Только просмотр</label>
                    </CheckboxContainer>
                    <div className="cards">
                        <CardList items={data} isDisableMode={isDisableMode} changeActiveHandler={changeActiveHandler}/>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default App;

const CheckboxContainer = styled.div`
    float: right;
    margin-right: 50px;
    margin-top: 20px;
`;

const Checkbox = styled.input.attrs({type: 'checkbox', id: 'read-only'})`
    & ~ .read-only__label {
        color: black;
    }

    &:hover {
        cursor: pointer;
    }

    &:checked ~ .read-only__label {
        color: #12b352;
    }
`;