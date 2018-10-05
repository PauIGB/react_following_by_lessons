import React, { Component } from 'react';

import CommentList from 'components/CommentList';

export default class CommentListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }  
    render() {   
        console.log(this.props);       
        return (  
            null
            // <CommentList /> 
               
        );
    }
}
