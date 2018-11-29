import React from 'react';
import {connect} from 'react-redux';
import { addTodo } from '../actions/todo_actions';

class AddTodo extends React.PureComponent {

  state = {
    text: ''
  };

  inputChangeHandler = e => {
    this.setState({text: e.target.value});
  };

  clickHandler = () => {
    const {text} = this.state;
    this.props.addTodo({
      text,
      done: false
    });
    this.setState({text: ''});
  }

  render(){
    return (
      <div>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.text} />
        <button onClick={this.clickHandler}>Add</button>
      </div>
    );
  }
};

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(AddTodo);