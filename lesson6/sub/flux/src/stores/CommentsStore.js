import { EventEmitter } from 'events';
import { 
    ADD_COMMENT,
    FETCH_COMMENTS_START,
    FETCH_COMMENTS_END,
    GET_COMMENTS,
} from 'constants/CommentsConstant';

import dispatcher from '../dispatcher';

// import axios from 'axios';

class CommentsStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.comments = [1, 2, 3];
        this.loading = false;
    }

    //функция 1. получает данные с сервера
    // 2. генерирует событие FETCH_COMMENTS_END , где в payload будут данные json.
 //    (которое будет обработано в handle actions)
 //отрабатывает ф-ция fetchCommentsEnd, где в качестве аргумента предается action.paylod, в котором находится полученный json

    fetchCommentsStart = () => {        
        this.loading = true;
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())       
        .then(json => {        
            dispatcher.dispatch({
                type: FETCH_COMMENTS_END,
                payload: json,
            })
        })
        // .then(json => this.loading = false)
        //использование axios помогает скоращать код на одну строку(не надо парсить json)+легче отлавливать ошибки
        // axios
        // .get('http://jsonplaceholder.typicode.com/posts')
        // .then((response) => {
        //     let { data } = response;
        //     dispatcher.dispatch({
        //         type: FETCH_COMMENTS_END,
        //         payload: data,
        //     })
        // })
    }


    fetchCommentsEnd = (comments) => {
        this.comments = comments; // свойству this.comments передается занчение comments, все, что было до этого, стирается
        this.change(); //вызывается node метод emit, относящийся к Events,без вызова emit не отработает on
        // this.emit('test', this.comments);
        this.loading = false;
        console.log(this.loading)
    }

    //функция change позволяет передать on.('change') текущее состояние this.state
    //между компонентами возможно передавать данные только с помощью emit, как я понял
    change = () => {
        this.emit('change', this.comments); // название события 'change', данные this.comments
        //при вызове on('change', function(this.comments) {}) /будет произведено действие, указанное в ф-ции над this.comments
    }

    //данная ф-ция в примере не используется
    // getComments = () => {
    //     if (this.comments.length) {
    //         return this.comments
    //     }
    // }

    addComment = (comment) => {   
        // this.comments.push(comment);
        this.comments = this.comments.concat(comment); //метод concat вернет новый массив, поэтому, если нужно использовать
        // именно данный метод, то придется переопределять this.props, присваивая ему зн-е нового массива
        this.change(); // вызывается node метод emit, относящийся к Events,без вызова emit не отработает on
    }

    handleActions = (action) => {
        switch (action.type) {
            case ADD_COMMENT: {
                this.addComment(action.payload);
                break;
            }
            case FETCH_COMMENTS_START:{
                this.fetchCommentsStart();
                break;
            }
            case FETCH_COMMENTS_END:{
                this.fetchCommentsEnd(action.payload);
                break;
            }
            case GET_COMMENTS:{
                this.getComments();
                break;
            }
            default:
                break;
        }
    }

}

const cS = new CommentsStore;
dispatcher.register(cS.handleActions);
export default cS;
