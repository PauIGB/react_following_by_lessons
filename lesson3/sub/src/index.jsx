import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './vendors'

import KanbanBoard from './components/KanbanBoard';

let cardList = [
    {
        id: 1,
        title: 'Прочитать книгу по React.js',
        description: 'Прочитать книгу по React.js v.14+',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 2,
        title: 'Написать приложеие на React.js',
        description: 'Kanban board',
        status: 'todo',
        tasks: [
            {
                id: 1,
                name: 'Изучить базовый синтаксис',
                done: true
            },
            {
                id: 2,
                name: 'Написать каркас приложения',
                done: false
            },
            {
                id: 3,
                name: 'Доработать приложение',
                done: false
            }
        ]
    }
    
]

const app = document.getElementById('app');


ReactDOM.render(
    <KanbanBoard cards={cardList} />, 
    app
);