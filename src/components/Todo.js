import React from 'react';
import { connect } from 'react-redux';
import { handleChange, handleDelete } from '../store/action';

function TodoList(props) {
  return (
    <>
      {props.todo.map((todo, i) => (
        <center>
          <input
            type='checkbox'
            onChange={() => props.dispatch(handleChange(i))}
            value={todo.checked}
          />
          <label>{todo.todo}</label>
          <span onClick={() => props.dispatch(handleDelete(i))}> X</span>
        </center>
      ))}
    </>
  );
}

function getState(state) {
  return {
    todo: state,
  };
}

export default connect(getState)(TodoList);