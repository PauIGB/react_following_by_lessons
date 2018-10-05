import { EventEmitter } from 'events';
import { 
    EM_CLICK_LINK,
    FETCH_REQ,
    COMPONENT_STATE_UPD,
} from 'constants/regFormConstants';

import dispatcher from '../dispatcher';

class regFormStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.data = {
            isDisabled: 'disabled',
            name_reg: '',
        }
    }    

    emClick() {   
        const link = document.getElementById('reg-link');
        link.click();
    }

    fetchReq = (attr) => {
        const {url, method, text} = attr;
        const BASE_URL = 'http://localhost:3001';
        fetch(`${BASE_URL}/${url}`, {
            method: method,
            body: JSON.stringify(text) || null,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }) 
    }

    onChangeUpdater = (event) => {
        this.data[event.target.name] = event.target.value;
    }

    disBtn = (event) => {
        (event.target.value !== "" ) ? this.data.isDisabled = false : this.data.isDisabled = 'disabled';
        this.change();
    }    

    componentStateUpd = (event) => {
        this.onChangeUpdater(event);
        this.disBtn(event);
        this.change();
    }
    
    change = () => {
        this.emit('change', this.data); 
    }

    handleActions = (action) => {
        switch (action.type) {
            case EM_CLICK_LINK: {
                this.emClick();
                break;
            }
            case FETCH_REQ:{
                this.fetchReq(action.payload);
                break;
            }
            case COMPONENT_STATE_UPD:{
                this.componentStateUpd(action.payload);
                break;
            }            
            default:
                break;
        }
    }
}

const cRF = new regFormStore;
dispatcher.register(cRF.handleActions);
export default cRF;
