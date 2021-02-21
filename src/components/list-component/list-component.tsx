import ListItemComponent from '../list-component-item/list-item-component';
import './list-component.css';

import { TodoList } from '../../models/todo';
import { Todo } from '../../models/todo';

const ListComponent = ({ list }: TodoList ) => {
  const listTmpl = list.map((item: Todo) => {

    return (
      <li key={item.id} className="list-group-item">
        <ListItemComponent { ...item } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { listTmpl }
    </ul>
  );
};

export default ListComponent;
