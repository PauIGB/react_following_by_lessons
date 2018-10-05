import React, { Component, PureComponent } from 'react';

import CommentListContainer from 'containers/CommentListContainer';
import CommentsStore from 'stores/CommentsStore';
import { addComment, fetchComments } from 'actions/CommentActions';

export default class CommentsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        };
    }  
    // новый коммент
    // вызывает action  addComment, в payload будут переданны данные let (благодаря тому, что это прописано в самом action)
    // addComment мутируем массив в store, с помощью push добавляя еще одни коммент
    // затем вызывается emit, как я понял on, который был вызван при componentDidMount отрабатывает автоматически и
    // вызывать ф-цию onCommentChange, которая производит setState для отрисовки компонета не нужно, она вызывается автоматически
    newComment = () => {
        // CommentsStore.once('change', this.onCommentChange); // если listener , будет вызван после addComment при первом клике обработчик будет зарегистрирован, 
        // при следующих кликах начнет выводить значения, если до, как в данном случае, то на каждый клик будет вывод
        let body = 'Новый комментарий';
        let userId = 1;
        let title = 'Title';
        addComment({body, userId, title});
    }

        //функция для перерисовки компонента, компонент перерисовывается за счет вызова setState
    onCommentChange = (comments) => {
        this.setState({
            comments,
        })
    }
    //использовать willmount не рекомендуется

    // componentWillMount() {
    //     CommentsStore.on('change', this.onCommentChange);
    // }


    componentDidMount() {
            // componentDidMount происходит после render компонента
        console.log('componentDidMount')
        
        //с помощью fetchComments инициализируется соответствующий action
        // вызывается метод fetchComments, который:
        //1. выполняет fetch и получает комменты с сервера
        //2. генерит action FETCH_COMMENTS_END, куда, в качестве payload, передается данные json
        //данный action в свою очередь вызывает метод store fetchCommentsEnd(action.paylod)
        //данный метод передает значение comments в this.comments внутри store
        fetchComments();

        // будет вызван только если также вызывается метод emit. куда передано название change и данные
        // this.onCommentChange === (comments) => this.onCommentChange(comments)
        //после этого принимаются аргументы, в данном случае comments передаются в ф-цию onCommentChange, где уже
        //выполняется setState и перерисовывается компонент
        // CommentsStore.once('change', this.onCommentChange);
        CommentsStore.on('change', this.onCommentChange); //полная запись ф-цииCommentsStore.on('change', (comments) => this.onCommentChange(comments));
        
        //on вызывается, только если был вызван соответствующий emit, c тем же именем 'test'
        // CommentsStore.on('test', result => console.log(result))

        //вызывать функцию с помощью get не получается, т.к. идет передача данных только через emit и on

        // getComments();
        // console.log(getComments()) // не работает
    }

    componentWillUnmount() {
        CommentsStore.removeListener('change', this.onCommentChange)
    }

    render() {      
        //при render (до того, как отработал componentDidMount)
        const { comments } = this.state;

         return (  
            // <Comments />       
            <div>
                <button onClick={this.newComment}>Добавить новый комментарий</button>
                <CommentListContainer comments={comments} />
            </div>
        );
    }
}
