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
    }

  }

  render() {
    const {filters, columns, data} = this.state;
    return (
      <div className="App">
          <Filters filters={filters} />
          <SortableTable columns={columns} data={data} />
      </div>
    );
  }
}

export default App;
