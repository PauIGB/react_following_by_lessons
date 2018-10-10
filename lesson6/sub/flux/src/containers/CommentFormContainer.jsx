import React, { PureComponent } from 'react';

import regFormStore from 'stores/regFormStore';
import generalStore from 'stores/generalStore';
import { formUpd } from 'actions/regFormActions';
import { fetchReqGen, change } from 'actions/generalActions';
import { withRouter } from 'react-router-dom';

import CommentForm from 'components/CommentForm';
import dispatcher from '../dispatcher';

class CommentFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '', 
            isDisabled: 'disabled',
        };  
        // this.event = 'sendComment'; 
    }

    componentDidMount() {
        regFormStore.on('change', this.stateUpdater);
        console.log(dispatcher)
    }
  
    addComment = (event) => {            
        event.preventDefault(); 
        const {
            match: {
              params: { id }
            }
        } = this.props;
        // const { onGetApi } = this.props;

        let url = `posts/${id}/comments`;
        let method = 'POST';
        let text = { 
            body: this.state.text,
            type: 'me', 
        };
        let advFeatures = 'this.emit("commAreaUpd", [1, 2, 3])';
       
        fetchReqGen({url, method, text,  });
        // fetch(`http://localhost:3001/posts/${id}/comments`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         body: this.state.text,
        //         type: 'me',
        //     }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
        // .then(() => onGetApi(id))
        // .then(() => 
        this.setState({
            text: '',
            isDisabled: "disabled",
        })
        // ); 
  
        change()


    } 
        
    stateUpdater = (data) => {

        this.setState(data)
        // this.setState({
        //     name_reg: data.name_reg,
        //     isDisabled: data.isDisabled, 
        // })
    }
    handleChange = (event) => {
        formUpd(event); 
        // this.setState({        
        //     [event.target.name]: event.target.value,
        // });
        // (event.target.value !== "" ) ? this.setState({isDisabled: false}) : this.setState({isDisabled: 'disabled'});              
    }

    render() {
        const{ text, isDisabled } = this.state;

        return (  
            <CommentForm 
            onHandleChange={this.handleChange} 
            onAddComment={this.addComment} 
            text={text} 
            isDisabled={isDisabled} />       
        );
    }
}

export default withRouter(CommentFormContainer);