import './Counter.css';

import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            iterator: 1,
        };
        //вместо bind при вызове функции можно написать его здесь
        // this.handleMinusClick = ::this.handleMinusClick; //или
        // this.handleMinusClick = this.handleMinusClick.bind(this);

    }
    //финальный метод с использованием атрибутов тега button
    handleClick = (event) => {
        const addition = event.target.name === 'plus' ? 1 : -1;
        this.setState((prevState) => {
            return {
                ...prevState,
                iterator: prevState.iterator + addition,
            }
        });
    }

    //использование iterator внутри input

    handleChange = (event) => {
        this.setState({
            //квадратные скобки означают, что в ключ объекта мы подставляем переменную
            [event.target.name]: +event.target.value, //с помощью + переводим строчное значение в число
        })

    }
    
    //используем один метод вместо 2х

    // handleClick = (sign) => () => {
    //     const addition = sign === 'plus' ? 1 : -1;
    //     this.setState((prevState) => {
    //         return {
    //             ...prevState,
    //             iterator: prevState.iterator + addition,
    //         }
    //     });
    // }
    
    // handlePlusClick() {
    //     console.log('plus');
    //     // использование данной конструкции с bind
    //     this.state.iterator = this.state.iterator + 1;
    // }
    // handleMinusClick() {
    //     console.log('minus');
    //     this.state.iterator = this.state.iterator - 1;
    // }

    //можно заменить методы стрелочными функциями, у которых контекст не будет потерян, 
    // т.к. определяется в момент создания ф-ции
    // данные способ более предпочтительный, т.к. при нажатии на кнопку не создаются новые ф-ции
    // handlePlusClick = () => {
    //     console.log('plus');
    //     //самый предпочтительный метод
    //     this.setState((prevState) => {
    //         return {
    //             ...prevState,
    //             iterator: prevState.iterator + 1,
    //         }
    //     })
    //     //метод ниже подходит, если клики выполняются вручную и не нужно делать много кликов
    //     // const { iterator } = this.state;
    //     // this.setState({
    //     //     iterator: iterator + 1,
    //     // })
    //     // использование данной конструкции с bind
    //     // debugger; -проверка выполнения кода в консоле
    //     // this.state.iterator ++; // ,без использования setState
    //     // this.forceUpdate(); //данный метод нужно использовать по минимуму или не использовать,
    //     // вместо него лучше использовать this.setState
        
    // }
    // handleMinusClick = () => {
    //     console.log('minus');
    //     this.setState({
    //         iterator: this.state.iterator - 1,
    //     })
    //     // this.state.iterator --;
    // }
    

    render() {
        const { iterator } = this.state;
        return (
            <div>
                {/* bind передает контекст записывается как:
                в данном случае на каждый клик создается новая функция, новое состояние { iterator } в Html разметке не отображается
                <button onClick={this.handleMinusClick.bind(this)}>-</button> или
                <button onClick={this.handleMinusClick}>-</button>  или
                <button onClick={() => this.handlePlusClick()}>+</button> */}

                {/* <button onClick={this.handleMinusClick}>-</button>
                { iterator }
                <button onClick={this.handlePlusClick}>+</button> */}

                {/* <button onClick={this.handlePlusClick.bind(this)}>+</button>
                <button onClick={::this.handlePlusClick}>+</button> 
                <button onClick={() => this.handlePlusClick()}>+</button> */}

                 {/* <button onClick={this.handleClick('minus')}>-</button>
                { iterator }
                <button onClick={this.handleClick('plus')}>+</button> */}
                
                <button name="minus" onClick={this.handleClick}>-</button>
                {/* { iterator } */}
                {/* перемещаем в input */}
                <input type="text" name="iterator" value={ iterator } onChange={this.handleChange} />
                <button name="plus" onClick={this.handleClick}>+</button>
            </div>
        );
    }
}