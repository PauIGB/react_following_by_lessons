import './CommentsList.css';
//PureComponent работает только с иммутируемыми данные, мутированные, в принцпе лучше не использовать
//проверятет только изменение адреса без глубокой проверки всех компонентов
import React, { Component, PureComponent } from 'react';

export default class CommentsList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
        this.interval = null;
    }
    //перед монтированием(рендером) компонента
    // componentWillMount() { //данный компонет будет в ближайшее время удален из react

    // }
    //после монтирования(рендера) компонента


    componentDidMount() {  
        this.inerval = setInterval(() => {
            return fetch('http://jsonplaceholder.typicode.com/comments')
                .then((response) => response.json())
                .then((comments) => {          
                        this.setState({
                        comments:comments
                    });
                }) 
                .catch(() => {
                    this.setState({error: ''})
                });  
            });   
        
    }
    //мои эксперименты с setTimeout
    // componentDidMount() {     
    //     return fetch('http://jsonplaceholder.typicode.com/comments')
    //     .then((response) => response.json())
    //     .then((comments) => {  
    //         // comments.forEach((item, idx) => setTimeout(() => { console.log(item);}, 2000 * idx))
    //         comments.forEach((item, idx) => setTimeout(() => {
    //             this.setState((prevState) => {
    //                 return {
    //                     ...prevState,
    //                     comments: prevState.comments.concat([item.body]),
    //                 }
    //             })
    //         }, 5000 * idx))
           
    //         // this.setState({
    //         //     comments:comments
    //         // });
    //     })   
    // }

    //компонент срабатывает каждый раз, когда родительский компонент присылает props
    //с помощью него можно синхронизировать состояния
    //в методе не нужно вызывать ajax,
    //использутся, чтобы что-то рассчитать на основе поступающих данных
    componentWillReceiveProps() { // данный компонент собираются удалить и заменить компонентом DidReceiveProps
        //какой-то абстрактный пример из урока, который незестно как и зачем работает
        if(nextProps.id !== this.props.id) {
            this.setState({width: 2 * nextProps.size})
        }
    }

    //компонент для оптимизации производительности сравнивате текущее состояние и свойства компонента, были ли они изменены
   //при использование PureComponent данный метод не нужен, т.к. там есть собственная реализация данного функционала
    shouldComponentUpdate(nextProps, nextState) {
        return true; //компонент будет перерисован
        // return false; //компонент не будет перерисован
    }

    //отрабатывает когда компонент уничтожается,
    //не используется с PureReact component
    //нужен для обнуления таймеров
    componentWillUnmount() {
        clearInterval(this.interval); // остановить отправку fetch запросов
    }


    render() {
        const {comments} = this.state;
        return (
            <ul>             
                {comments.map((comment, idx) => <li key={idx}>{comment.name}: {comment.body}</li>)}
            </ul>
        );
    }
}