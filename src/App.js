import React, { Component } from 'react';
import './App.css';

import data from './data';
import Filters from './components/Filters';
import SortableTable from './components/SortableTable';


const TABLE_COLUMNS = [
  {
    label: 'Product Name',
    sort: 'default',
  },{
    label: 'Rating',
    sort: 'default',
  },{
    label: 'Price',
    sort: 'default',
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeFilters: [],
      data: data,
      columns: TABLE_COLUMNS
    };
    this.changeActiveFilters = this.changeActiveFilters.bind(this);
    this.getDisplayedData = this.getDisplayedData.bind(this);
  }

  changeActiveFilters(e) {
    const updatedActiveFilter = this.state.activeFilters;
    const index = updatedActiveFilter.indexOf(e.target.value);
    if (index === -1) {
      updatedActiveFilter.push(e.target.value);
    } else {
      updatedActiveFilter.splice(index, 1);
    }
    this.setState({
      activeFilters: updatedActiveFilter
    });
    console.log(this.state.activeFilters);
  }

  getDisplayedData() {
    const x = this.state.data.filter(element => {
      return this.state.activeFilters.indexOf(element.type) !== -1;
    });
    console.log(x);
  }

  render() {
    const {columns, data} = this.state;
    return (
      <div className="App">
          <Filters changeActiveFilters={this.changeActiveFilters} />
          <SortableTable columns={columns} data={data} />
      </div>
    );
  }
}

export default App;
