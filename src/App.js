import React, {Component} from 'react';
import './App.css';
import {Card} from './Components/Card/Card.js';
import {Header} from './Components/Header/Header.js';

class App extends Component {

render() {
    return (
        <body>
            <Header name = "HEADER"/>
            <Card caption = "Caption" text = "Я знаю одну планету, там живет один господин с багровым лицом. Он за всю жизнь ни разу не понюхал цветка. Ни разу не поглядел на звезду. Он никогда никого не любил. И никогда ничего не делал. Он занят только одним: он складывает цифры. И с утра до ночи твердит одно: «Я человек серьезный! Я человек серьезный!» — совсем как ты. И прямо раздувается от гордости. А на самом деле он не человек. Он гриб."/>
        </body>
    )
  }
}

export default App