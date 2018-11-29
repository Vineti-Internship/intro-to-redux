import React from 'react';
import {connect} from 'react-redux';
import {markTodoDone} from '../actions/todo_actions';

class TodoList extends React.PureComponent {
  render(){
    return(
      <div>
        {
          this.props.todos.map((todo, idx) => 
            <div key={idx}>
              <span>{todo.text}</span>
              <input
                type="radio"
                checked={todo.done}
                disabled={todo.done}
                onChange={() => this.props.markTodoDone(idx)}
              />
            </div>
          )
        }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  markTodoDone
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);