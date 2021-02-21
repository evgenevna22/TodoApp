import { Component } from 'react';
import './search-component.css';

export default class SearchComponent extends Component {
  render() {
    return (
      <div className="search-container d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="type to search"
        />
        <button className="btn btn-outline-info">All</button>
        <button className="btn btn-outline-warning">Active</button>
        <button className="btn btn-outline-success">Done</button>
      </div>
    );
  }
}
