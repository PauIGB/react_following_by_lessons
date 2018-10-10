import { EventEmitter } from 'events';
import { 
    BASE_URL,
    FETCH_REQ_GEN,
    CHECKER_GEN,
} from '../constants/generalConstants';

import dispatcher from '../dispatcher';

class generalStore extends EventEmitter {
    constructor(props) {
        super(props);
        // this.data = 'test';        
        this.loading = false;
        // this.load = 'false'
        // this.data = {
        //     isDisabled: 'disabled',
        //     name_reg: '',
        // }
    }    

    // emClick() {   
    //     const link = document.getElementById('reg-link');
    //     link.click();
    // }
    // dataUpdater(json) {
    //     this.data = json;

    //     console.log(this.data);
    //     return (this.data);
    // }


    fetchReqGen = (attr) => {   

        const {url, method, text, event,} = attr;
        // if(this.loading === false) {
 
            
            fetch(`${BASE_URL}/${url}`, {
                method: method,
                body: JSON.stringify(text) || null,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())  
            .then(json => this.emit(event, json))
            // .then(json => advFeatures)
            // .then(final => this.loading = false)      
            // .then(json => this.emit('fetchGen', json))
            
            // this.emName = ''
        // }
    }
    // fetchReqn = (attr) => {
    //     const {url, method, text} = attr;
    //     const BASE_URL = 'http://localhost:3001';
    //     fetch(`${BASE_URL}/${url}`, {
    //         method: method,
    //         body: JSON.stringify(text) || null,
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(this.emClick) 
    // }

    // onChangeUpdater = (event) => {
    //     this.data[event.target.name] = event.target.value;
    // }

    // disBtn = (event) => {
    //     (event.target.value !== "" ) ? this.data.isDisabled = false : this.data.isDisabled = 'disabled';
    //     this.change();
    // }    

    // componentStateUpd = (event) => {
    //     this.onChangeUpdater(event);
    //     this.disBtn(event);
    //     this.change();
    // }
    
    change = (event, json) => {
        this.emit(event, json); 
    }

    handleActions = (action) => {
        switch (action.type) {
            // case EM_CLICK_LINK: {
            //     this.emClick();
            //     break;
            // }
            case FETCH_REQ_GEN: {
                this.fetchReqGen(action.payload);
                break;
            }

            // case COMPONENT_STATE_UPD:{
            //     this.componentStateUpd(action.payload);
            //     break;
            // }            
            default:
                break;
        }
    }
}

const genStore = new generalStore;
dispatcher.register(genStore.handleActions);
export default genStore;
