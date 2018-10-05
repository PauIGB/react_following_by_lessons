import './Menu.css';

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

function Menu (props) {    
    
    return(
        <ul>
            {props.items.map((item, idx) => <li key={idx}><a href={item.href}></a>{item.title}</li>)}
        </ul>
    )
}

export default withRouter(Menu);

