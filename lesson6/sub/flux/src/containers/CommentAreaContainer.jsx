import React, { PureComponent } from 'react';

import CommentArea from 'components/CommentArea';
import MessageItem from 'containers/MessageItemContainer';
import { withRouter } from 'react-router-dom';
import generalStore from 'stores/generalStore';
import { fetchReqGen } from 'actions/generalActions';
import dispatcher from '../dispatcher';


 class CommentAreaContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
        this.event = 'commAreaUpd';   
    } 

    componentDidMount() {
        this.getApi()
    }

    componentWillUnmount() {
        generalStore.removeListener(this.event, this.stateUpdater);
    }

    componentDidUpdate(prevProps) {
        generalStore.removeListener(this.event, this.stateUpdater);
        
        const { location } = this.props;
        const prevLocation = prevProps.location.pathname;
        if (prevLocation !== location.pathname) { 
            this.getApi();
        }
        console.log(dispatcher)
        
    }

    stateUpdater = (data) => {
        this.setState({
            comments: data,
        })
    }

    getApi = () => {
        const {
            match: {
              params: { id }
            }
        } = this.props;

        const url = `posts/${id}/comments`;
        let event = this.event;
        fetchReqGen({url, event});
        generalStore.on(event, this.stateUpdater);
    }    

    render() { 
        // const { comments } = this.props;
        const { comments } = this.state;
        const messageRend = comments.map((comment, idx) => {
            return (<MessageItem key={idx} text={comment.body} type={comment.type} />)         
        });      
        return (  
            <CommentArea messageRend={messageRend} />       
        );
    }
}

export default withRouter(CommentAreaContainer);