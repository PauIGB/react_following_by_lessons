import React, { PureComponent, Fragment } from 'react';

import CommentsList from 'components/CommentsList';

export default class CommentsListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            loading: false,
            page: 1,
        }
    }
    loadMore = () => {
        //пересечение параметров comments, нужно использовать prevState
        const { page, comments } = this.state;
        this.setState({ loading: true, });
        return fetch(`http://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`)
            .then((response) => response.json())
            .then((comments) => {          
                    this.setState((prevState) => ({
                    ...prevState,
                    comments: prevState.comments.concat(comments),
                    loading:false,
                    page: prevState.page + 1,
                }));
            }) 
    }
    componentDidMount() {  
      this.loadMore();
    }   

    render() {
        const { comments, loading } = this.state;
        return (
            <Fragment>
                <CommentsList onLoadMore={this.loadMore} comments={comments} />
                {loading && 'Loading ..'}
            </Fragment>
            // loading && !comments.length ? 'loading ..' : <CommentsList onLoadMore={this.loadMore} comments={comments} /> 
     
        )
    }
}