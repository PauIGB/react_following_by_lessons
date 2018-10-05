import dispatcher from '../dispatcher';
import { 
    ADD_COMMENT, 
    FETCH_COMMENTS_START,
    GET_COMMENTS
 } from 'constants/CommentsConstant';

export const addComment = ({title, userId, body}) => {
    const comment = {title, userId, body};

    dispatcher.dispatch({
        type: ADD_COMMENT,
        payload: comment,
    })
}

export const fetchComments = () => {
    dispatcher.dispatch({
        type: FETCH_COMMENTS_START,       
    })
}

export const getComments = () => {
    dispatcher.dispatch({
        type: GET_COMMENTS,       
    })
}