import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import About from 'static/About';
import Contacts from 'static/Contacts';
import Goods from 'static/Goods';
import Home from 'static/Home';

class App extends Component {
// Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции.
    //удаляем один символ решетку, т.к. делаем через якоря Html5
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1),
        };
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1),
            })
        })

    }
    render() {
        let Child;
        switch (this.state.route){
            case '/about': 
                Child = About;
                break;
            case '/goods':
                Child = Goods;
                break;
            case '/contacts':
                Child = Contacts;
                break;
            default:
                Child = Home;
        }
        return(
            <div>
                <header>Приложение static view</header>
                <ul>
                    <li><a href="#/home">Main</a></li>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/goods">Goods</a></li>
                    <li><a href="#/contacts">Contacts</a></li>
                </ul>
                <div>
                    <Child />
                </div>
            </div>

        )
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);