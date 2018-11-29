import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import TodoList from './components/todo_list';
import AddTodo from './components/add_todo';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoList />
          <AddTodo />
        </div>
      </Provider>
    );
  }
}

export default App;
