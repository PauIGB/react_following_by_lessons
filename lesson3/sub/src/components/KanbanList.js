import React from 'react';

import Card from './KanbanCard'

class KanbanList extends React.Component {
    render() {
        let cards = this.props.cards.map((card, index) => {
            return <Card 
            id={card.id}
            title={card.title}
            description={card.description}
            tasks={card.tasks}
            key={index}
            />
        })
        return(
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        )
    }
}

export default KanbanList;