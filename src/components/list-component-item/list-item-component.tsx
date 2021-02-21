import { Component } from 'react';

import './list-component-item.css';

import { Todo } from '../../models/todo';
import { throws } from 'assert';

interface State {
  isImportant: boolean;
  isCompleted: boolean;
}

export default class ListItemComponent extends Component<Todo, State> {

  state: State = {
    isImportant: false,
    isCompleted: false
  };

  onComplete = () => {
    this.setState(({isCompleted}) => {
      return {
        isCompleted: !isCompleted
      }
    });
  }

  setImportantState = () => {
    this.setState(({isImportant}) => {
      return {
        isImportant: !isImportant
      }
    });
  }

  getClassNames() {
    let className = '';
    className += this.state.isImportant ? ' important' : '';
    className += this.state.isCompleted ? ' completed' : '';
    return className;
  }

  render() {
    const { label, onDelete }: Todo = this.props;

    return (
      <p className="todo-list-item">
        <span className={"todo-list-item__text" + this.getClassNames()} onClick={this.onComplete}>
          {label}
        </span>

        <span className="todo-list-item__actions" onClick={onDelete}>
          <button className="todo-list-item__btn btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>

          <button className="todo-list-item__btn btn btn-outline-success btn-sm" onClick={this.setImportantState}>
            <i className="fa fa-exclamation"></i>
          </button>
        </span>
      </p>
    );
  }
}
