const initialTodoState = [];

const todoReducer = (state = initialTodoState, action) => {
  console.log('state' ,state);
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    // case 'DELETE_TODO':
    //   const currentTodos = [...state.todos];
    //   currentTodos.splice(action.payload, 1);
    //   return {...state, todos: currentTodos};
    default:
      return state;
  }
};

// ANOTHER FILE
// ---------------------------------

const initialUserState = {
  name: ''
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_NAME':
      return {...state, name: action.payload}
    default:
      return state;
  }
};

module.exports = {
  todoReducer,
  userReducer
};