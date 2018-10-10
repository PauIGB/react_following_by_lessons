import dispatcher from '../dispatcher';
import { 
    EM_CLICK_LINK,
    // FETCH_REQ,
    FORM_UPD,
 } from 'constants/regFormConstants';

export const emClickLink = () => {
    dispatcher.dispatch({
        type: EM_CLICK_LINK,   
    })
};

// export const fetchReq = ({url, method='GET', text, addData=null}) => {
//     const attr = { url, method, text, addData };
//     dispatcher.dispatch({
//         type: FETCH_REQ,
//         payload: attr,
//     })
// };

export const formUpd = (event) => {    
    dispatcher.dispatch({
        type: FORM_UPD,
        payload: event,
    })
};