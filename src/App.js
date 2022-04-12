/*import React from 'react';
import './Header.css';

function Header(props) {
  return (
      <header className='header'>
        <div className='container'>
          <div className='header-brand'>{props.brand}</div>
        </div>
      </header>
  );
}

export default Header;*/

import React, {Component} from 'react';
import './App.css';

function Header(props){
    return <header className='header'>{props.name}</header>
}

function Card(){
    return <div className='bolder'>
                <div className='row'>
                    <div className='text'>
                        <p>Caption</p>
                        <hr/>
                        <p>Я знаю одну планету, там живет один господин с багровым лицом. Он за всю жизнь ни разу не понюхал цветка. Ни разу не поглядел на звезду. Он никогда никого не любил. И никогда ничего не делал. Он занят только одним: он складывает цифры. И с утра до ночи твердит одно: «Я человек серьезный! Я человек серьезный!» — совсем как ты. И прямо раздувается от гордости. А на самом деле он не человек. Он гриб.</p>
                    </div>
                    <div className="arrow"></div>
                    <div className="ballon">Карточка</div>
                </div>
    </div>
}

class App extends Component {

render() {
    return (
        <body>
            <Header name = "HEADER"/>
            <Card/>
        </body>
    )
  }
}

export default App