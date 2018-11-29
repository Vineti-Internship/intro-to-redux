const { createStore, combineReducers } = require('redux');
const { todoReducer, userReducer } = require('./reducer');
const { addTodo, deleteTodo, updateUserName } = require('./action');

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer
});
const store = createStore(rootReducer);

const listener = () => console.log('The store got updated, i should rerender');

// const unsib = store.subscribe(listener);

console.log(store.getState());
store.dispatch(addTodo('Upload the recording'));
// unsib();
store.dispatch(addTodo('Watch the recording'));

new Array(2).fill(0).forEach((el, index) => {
  store.dispatch(addTodo(`todo-${index}`));
});

store.dispatch(updateUserName('abc'))

store.dispatch(deleteTodo(2));

console.log(store.getState());