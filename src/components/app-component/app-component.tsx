import SearchComponent from '../search-component/search-component';
import ListComponent from '../list-component/list-component';

export interface Todo {
  label: string;
  id: number;
  isImportant: boolean;
  isCompleted: boolean;
}

const AppComponent = (): JSX.Element => {
  
  return (
    <section className="container">
      <h1>ToDo React App</h1>
      <div className="top-panel d-flex"></div>
      <SearchComponent />
      <ListComponent />
    </section>
  );
};

export default AppComponent;
