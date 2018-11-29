const addTodo = text => ({
  type: 'ADD_TODO',
  payload: text
});

const deleteTodo = index => ({
  type: 'DELETE_TODO',
  payload: index
});

// ANOTHER FILE
// ---------------------------------

const updateUserName = name => ({
  type: 'UPDATE_USER_NAME',
  payload: name
})

module.exports = {
  addTodo,
  deleteTodo,
  updateUserName
};