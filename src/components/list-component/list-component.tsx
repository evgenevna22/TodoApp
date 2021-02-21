import { Component } from 'react';

import './list-component.css';

import ListItemComponent from '../list-component-item/list-item-component';

import { Todo } from '../../models/todo';

interface State {
  list: Todo[];
}

export default class ListComponent extends Component<{}, State> {

  state: State = {
    list: []
  }

  constructor(props: {}) {
    super(props);

    this.state.list = [
      { label: 'Learn React', isImportant: false, id: 1, isCompleted: false },
      { label: 'Show app', isImportant: true, id: 2, isCompleted: false },
      { label: 'Build app', isImportant: true, id: 3, isCompleted: false },
    ];
  }

  numOfTaskCompleted = (): number => {
    let num = 0;
    this.state.list.forEach((item: Todo) => {
      if (item.isCompleted) {
        num++;
      }
    });
    return num;
  };

  onDelete = (id: number) => {
    this.setState((state: State) => {
      const updatedList = state.list.filter(item => item.id !== id);
      return {
        list: updatedList
      }
    })
  }

  render() {
  
    const listTmpl = this.state.list.map((item: Todo) => {
      return (
        <li key={item.id} className="list-group-item">
          <ListItemComponent 
            {...item}
            onDelete={() => this.onDelete(item.id)}
          />
        </li>
      );
    });
  
    return (
      <section>
        <p>Completed: {this.numOfTaskCompleted()} of {this.state.list.length}</p>
        <ul className="list-group todo-list">{listTmpl}</ul>
      </section>
    );
  }
};
