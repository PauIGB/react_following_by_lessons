import React, { Component, PureComponent, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Header from 'components/Header';
import Counter from 'components/Counter';
import CommentsList from 'containers/CommentsListContainer';
import CommentsForm from 'components/CommentsForm';

import routes from './routes';

const creators = ['Vasya Pupkin', 'Petya Ivanov', 'Kolya Sidorov'];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
        
    }

    handleCommentRecieve = (comment) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                //push не возврщает новое значение, а изменяет старое, concat - возвращает новый массив
                comments: prevState.comments.concat([comment]),
            }
        })
    }
    
    render() {
        const { comments } = this.state;

        return (        
            <Fragment>
                <Header size="small" creators = {creators}>
                    <Link to="/">Home</Link>
                    <Link to="/comments">Comments</Link>
                </Header>
                <Switch>
                    {routes.map((route, idx) => <Route {...route} key={idx}/>)} 
                </Switch>
            </Fragment>
        );
    }
}

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
  );