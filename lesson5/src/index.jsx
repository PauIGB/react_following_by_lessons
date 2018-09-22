import React, { PureComponent, Fragment } from 'react';
import ReactDom from 'react-dom';

import Header from 'components/Header';
import Counter from 'components/Counter';
import CommentsList from 'components/CommentsList';
import CommentsForm from 'components/CommentsForm';

const creators = ['Vasya Pupkin', 'Petya Ivanov', 'Kolya Sidorov'];

class App extends PureComponent {
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
                <div>content</div>
                </Header>
                <Counter />
                Hello, world!
                {comments.length && <CommentsList comments={comments} />}
                <CommentsForm onSend={this.handleCommentRecieve} />
            </Fragment>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));