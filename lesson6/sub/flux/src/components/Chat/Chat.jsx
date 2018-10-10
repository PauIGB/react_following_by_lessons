import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dummy from 'components/Dummy';
import routes from '../../routes';
import СompanionsList from 'containers/СompanionsListContainer';
import StartDialog from 'containers/StartDialogContainer';
export default class Chat extends Component {
 
    render() {      
        const { res } = this.props;
        return (  
           <Fragment>
               <h1 className="main-heading">Welcome to chat, dear {res}</h1>
               <СompanionsList />
               <Switch>
                {/* <Route path='/chat' component={Dummy} exact />
                <Route path='/chat/:id' component={StartDialog} exact />} /> */}
                    {routes.map((route, idx) => <Route {...route} key={idx}/>)}                   
               </Switch>
           </Fragment>
        );
    }
}
