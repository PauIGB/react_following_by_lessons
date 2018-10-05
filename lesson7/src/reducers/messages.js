//обработка единственного action messageReceived
import { handleActions } from 'redux-actions';
//импортируем action
import { messageReceived } from 'actions/messages';

//состояние по умолчанию, здесь будут хранится объекты сообщений
const initialState = {
    entities: [],
  };

export default handleActions({
    //state - состояние до того, как пришел сигнал, action - сам сигнал
    [messageReceived]: (state, action) => {
        //возвращаем новое состояние
        return {
            ...state,
            //action payload - параметр, который был указан при вызове action
            entities: state.entities.concat([action.payload]),
        }
      }
}, initialState);