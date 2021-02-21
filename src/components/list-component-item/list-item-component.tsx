import { Component } from 'react';

import './list-component-item.css';

import { Todo } from '../../models/todo';
import { throws } from 'assert';

export default class ListItemComponent extends Component<Todo> {

  state = {
    isImportant: false,
    isCompleted: false
  };

  onComplete = () => {
    this.setState({
      isCompleted: true
    });
  }

  setImportant = () => {
    this.setState({
      isImportant: true
    });
  }

  getClassNames() {
    let className = '';
    className += this.state.isImportant ? ' important' : '';
    className += this.state.isCompleted ? ' completed' : '';
    return className;
  }

  render() {
    const { label }: Todo = this.props;

    return (
      <p className="todo-list-item">
        <span className={this.getClassNames()} onClick={this.onComplete}>
          {label}
        </span>

        <span className="todo-list-item__actions">
          <button className="todo-list-item__btn btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>

          <button className="todo-list-item__btn btn btn-outline-success btn-sm" onClick={this.setImportant}>
            <i className="fa fa-exclamation"></i>
          </button>
        </span>
      </p>
    );
  }
}
