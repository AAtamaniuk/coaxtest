import React, { Component } from 'react';
import './App.css';

import Filters from './components/Filters';
import SortableTable from './components/SortableTable';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Filters />
          <SortableTable />
      </div>
    );
  }
}

export default App;
