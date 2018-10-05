//подписываем компоненты на store
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import CommentsList from 'components/CommentsList';
import { mountEvents, sendMessage } from 'actions/messages';

class ChatContainer extends PureComponent {
    //в redux нет смысла хранить локальные значения, поэтому будет использовать state самого компонента
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            text: '',
        }
    }
    componentDidMount() {
        //выполнение метода соединения с сервером, как только ChatContainer будет загружен
        //метод находится в props
        const { mountEvents } = this.props;
        mountEvents();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSend = (event) => {
        // берем метод из this.props;        
        const { sendMessage } = this.props;
        sendMessage(this.state);
        event.preventDefault(); 

    }

    render() {
        //messages приходят в props
        const { messages } = this.props;

        //state компонента
        const { author, text } = this.state;
        return (
            <Fragment>
                <ul>
                    {messages.map((message, idx) => <li key={idx}>{message.author}: {message.text}</li>)}
                </ul>
                <form action="#">
                    <input placeholder="author" onChange={this.handleChange} type="text" name="author" value={author} /><br />
                    <textarea placeholder="message" onChange={this.handleChange} name="text" value={text}></textarea><br />
                    <button onClick={this.handleSend}>Send</button>
                </form>
            </Fragment>     
        )
    }
}
//метод отвечает за то, что будет в property компонента из store
//в ownProps будут переданным map и location( при использовании react-router )
//в state находится содержимое store
//все, что будет возвращатся в данном методе, попадет в property Компонента
function mapStateToProps(state, ownProps) {
    return {
        //изначальные props компонента
        ...ownProps,
        //достаем из store массив сообщений
        messages: state.messages.entities,
    }
    
}
//метод отвечает за то, что будет в property компонента из action
//добавление внутрь комопонента actions, чтобы компонент мог посылать actions
function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        //добавляем импортированные actions в компонент
        mountEvents: () => mountEvents(dispatch),
        sendMessage: sendMessage(dispatch),
    }
}
//в первых скобках указывается на какие части store подписывается компонент
export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);