import React, { PureComponent } from 'react';

import RegistrationForm from 'components/RegistrationForm';

import regFormStore from 'stores/regFormStore';
import generalStore from 'stores/generalStore';
import { emClickLink, fetchReq, disBtn, formUpd } from 'actions/regFormActions';
import { fetchReqGen } from 'actions/generalActions';

export default class RegistrationFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name_reg: '',
            isDisabled: 'disabled',                       
        };   
    }

    componentDidMount() {
        regFormStore.on('change', this.stateUpdater);
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
    }


    
    reg = (event) => {       
        const { name_reg } = this.state;           
        let url = 'profile';
        let method = 'POST';
        let text = {"name": name_reg};

        // fetchReq({url, method, text}); 

        fetchReqGen({url, method, text })
        emClickLink()
        // fetchReq({url, method, text, addData}); 
        event.preventDefault();  
    }

    componentWillUnmount() {
        regFormStore.removeListener('change', this.stateUpdater);       
    }

    render() {  
        const { isDisabled, name_reg } = this.state;
       
        return (  
            <RegistrationForm 
            isDisabled={isDisabled} 
            name_reg={name_reg}
            onHandleChange={this.handleChange}         
            onReg={this.reg} />       
        );
    }
}