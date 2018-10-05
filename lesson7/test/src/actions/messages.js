import { createAction } from 'redux-actions';
import io from 'socket.io-client';;

//подключение к серверу
const socket = io.connect('http://localhost:3000');

// action
//'[Message] Receive' - название сущности и действие, которое осуществляется
export const messageReceived = createAction('[Message] Receive');
//messagesSend - это сайд эффект, т.к. стейт не нужно обновлять, мы его получим с сервера
//было бы сигналом, если бы отправку сообщений обрабатывали на клиенте
// export const messageSend = createAction('[Message] Receive');

//side-effects
export const mountEvents = (dispatch) => {
    socket.on('message', (message) => {
      dispatch(messageReceived(message));
    });
  };
//метод отправки сообщений
export const sendMessage = (dispatch) => (message) => {
    socket.emit('message', message);
  };

