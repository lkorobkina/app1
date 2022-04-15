import React, {Component} from 'react';
import './App.css';
import {Card} from './Card.js';
import {Header} from './Header.js';

class App extends Component {

render() {
    return (
        <body>
            <Header name = "HEADER"/>
            <Card name = "Карточка"/>
        </body>
    )
  }
}

export default App