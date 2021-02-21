import SearchComponent from '../search-component/search-component';
import ListComponent from '../list-component/list-component';

export interface Todo {
  label: string;
  id: number;
  isImportant: boolean;
  isCompleted: boolean;
}

const AppComponent = (): JSX.Element => {
  const list: Todo[] = [
    { label: 'Learn React', isImportant: false, id: 1, isCompleted: false },
    { label: 'Show app', isImportant: true, id: 2, isCompleted: false },
    { label: 'Build app', isImportant: true, id: 3, isCompleted: false },
  ];

  let numOfCompleted = (): number => {
    let num = 0;
    list.forEach((item: Todo) => {
      if (item.isCompleted) {
        num++;
      }
    });
    return num;
  };

  return (
    <section className="container">
      <h1>ToDo React App</h1>
      <small>
        completed: {numOfCompleted()} of {list.length}
      </small>
      <div className="top-panel d-flex"></div>
      <SearchComponent />
      <ListComponent list={list} />
    </section>
  );
};

export default AppComponent;
