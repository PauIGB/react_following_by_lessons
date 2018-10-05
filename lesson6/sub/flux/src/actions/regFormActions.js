import dispatcher from '../dispatcher';
import { 
    EM_CLICK_LINK,
    FETCH_REQ,
    COMPONENT_STATE_UPD,
 } from 'constants/regFormConstants';

export const emClickLink = () => {
    dispatcher.dispatch({
        type: EM_CLICK_LINK,   
    })
};

export const fetchReq = ({url, method='GET', text}) => {
    const attr = { url, method, text };
    dispatcher.dispatch({
        type: FETCH_REQ,
        payload: attr,
    })
};

export const componentStateUpd = (event) => {    
    dispatcher.dispatch({
        type: COMPONENT_STATE_UPD,
        payload: event,
    })
};