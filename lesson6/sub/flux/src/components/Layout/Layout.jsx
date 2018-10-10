import 'normalize.css';
import './Layout.css';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import RegistrationForm from 'containers/RegistrationFormContainer';
import Chat from 'containers/ChatContainer';
import CommentsContainer from 'containers/CommentsContainer';

export default class Layout extends Component {
    render() {  
        // const { onGetApi, res } = this.props;         
        return (
        <div className="wrapper">
            <Switch>
                <Route path='/' component={RegistrationForm} exact />
                {/* <Route path='/chat' component={Chat} exact />} /> */}
                <Route path='/chat' render={() => <Chat exact />} />
                <Route path='/comments' component={CommentsContainer} />
            </Switch>
        </div>
        )
    }
}
