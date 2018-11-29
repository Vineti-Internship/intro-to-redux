import * as actionTypes from '../action_types';

const initialState = [];

export default (todos = initialState, action) => {
  switch (action.type) {
    case actionTypes.addTodo:
      return [...todos, action.payload];
    case actionTypes.markTodoDone:
      const currentTodos = [...todos];
      currentTodos[action.payload].done = true;
      return currentTodos;
    default:
      return todos;
  }
};