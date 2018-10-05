import './Menu.css';

import React, { Component } from 'react';

//Stateless - нет и не может быть состояния, доп. методов
export default function(props) {
    return(
        <ul>
            {props.items.map((item, idx) => <li key={idx}><a href={item.href}></a>{item.title}</li>)}
        </ul>
    )
}

