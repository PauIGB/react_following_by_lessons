import React, { PureComponent } from 'react';

import RegistrationForm from 'components/RegistrationForm';

import regFormStore from 'stores/regFormStore';
import { emClickLink, fetchReq, disBtn, componentStateUpd } from 'actions/regFormActions';

export default class RegistrationFormContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name_reg: '',
            isDisabled: 'disabled',                       
        };   
    }

    componentDidMount() {
        regFormStore.on('change', this.stateCorrector);
    }

    stateCorrector = (data) => {

        this.setState(data)
        // this.setState({
        //     name_reg: data.name_reg,
        //     isDisabled: data.isDisabled, 
        // })
    }

    handleChange = (event) => {
        componentStateUpd(event)   
    }
    
    reg = (event) => {        
        emClickLink();         
        const { name_reg } = this.state;           
        let url = 'profile';
        let method = 'POST';
        let text = {"name": name_reg};
      
        fetchReq({url, method, text}); 
        event.preventDefault();  
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