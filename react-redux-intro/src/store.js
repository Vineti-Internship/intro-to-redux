import {createStore, combineReducers} from 'redux';
import todoReducer from './reducers/todo_reducer';

export default createStore(combineReducers({
  todos: todoReducer
}));