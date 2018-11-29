import * as actionTypes from '../action_types';

export const addTodo = text => ({
  type: actionTypes.addTodo,
  payload: text
});

export const markTodoDone = index => ({
  type: actionTypes.markTodoDone,
  payload: index
});