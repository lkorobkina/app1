import React, {Component, useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import CardList from './Components/CardList/CardList.js';
import {cards} from "./Data";
import styled from "styled-components";

const App = props => {

    const [isDisableMode, setIsDisableMode] = useState(false);

    const [data, setData] = useState(cards);

    const changeActiveHandler = id =>
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

    return (
        <main>
            <div>
                <Header name="HEADER"/>
                <div className="bolder">
                    <button onClick={() => setData(data.filter(card => card.isActive === false))}>Удалить выбранные
                        карточки
                    </button>
                    <Styled
                        onClick={() => checkboxWatchOnlyHandler()}
                    >
                        <input
                            type="checkbox"
                            checked={isDisableMode}
                        />
                        <label>Только просмотр</label>
                    </Styled>
                    <div className="cards">
                        <CardList items={data} isDisableMode={isDisableMode} changeActiveHandler={changeActiveHandler}/>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default App;

const Styled = styled.div`
  display: inline-block;

  > input {
    opacity: 0;
  }

  > input + label {
    position: relative;
    padding-left: 900px;
    padding-top: 5px;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 870px;
      top: 10px;
      width: 17px;
      height: 17px;
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, .3)
    }

    &:after {
      content: '✔';
      position: absolute;
      top: 7px;
      left: 873px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s;
    }
  }

  > input:not(:checked) + label {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }

`;