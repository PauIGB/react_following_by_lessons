import dispatcher from '../dispatcher';
import { 
    FETCH_REQ_GEN,
    CHECKER_GEN,
    CHANGE,
 } from '../constants/generalConstants';

export const fetchReqGen = ({url, method='GET', text=undefined, event='fetchGen', advFeatures}) => {
    const attr = { url, method, text, event, advFeatures };
    dispatcher.dispatch({
        type: FETCH_REQ_GEN,
        payload: attr,
    })
};

export const checkerGen = () => {
       dispatcher.dispatch({
        type: CHECKER_GEN,
    })
};

export const change = () => {
    dispatcher.dispatch({
     type: CHANGE,
 })
};