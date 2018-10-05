//необходимое расширение для объдиенения преобразователей из папки reducers
import { combineReducers } from 'redux';

//импортируем преобразователь
import messagesReducer from './messages';

export default combineReducers({
  messages: messagesReducer,
});