import React, {Component} from 'react';
import _ from 'lodash';
import './App.css';

import data from './data';
import Filters from './components/Filters';
import SortableTable from './components/SortableTable';

const TABLE_COLUMNS = [
  {
    name: 'Product Name',
    label: 'name',
    sortMethod: 'default',
  }, {
    name: 'Rating',
    label: 'rating',
    sortMethod: 'default',
  }, {
    name: 'Price',
    label: 'price',
    sortMethod: 'default',
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
    this.sortData = this.sortData.bind(this);
  }

  changeActiveFilters(e) {
    const updatedActiveFilter = [...this.state.activeFilters];
    const index = updatedActiveFilter.indexOf(e.target.value);
    index === -1 ? updatedActiveFilter.push(e.target.value) : updatedActiveFilter.splice(index, 1);
    this.setState({
      activeFilters: updatedActiveFilter
    });
    console.log(this.state.activeFilters)
  }

  sortData(label) {
    const copyColumns = _.cloneDeep(this.state.columns);

    const filteredColumns = copyColumns.filter((element) => {
      return element.label === label;
    });

    let currentSortMethod = filteredColumns[0].sortMethod;

    switch (currentSortMethod) {
      case 'default':
        currentSortMethod = 'asc';
        break;
      case 'asc':
        currentSortMethod = 'desc';
        break;
      case 'desc':
        currentSortMethod = 'asc';
        break;
      default:
        currentSortMethod = 'asc';
    }

    copyColumns.map((element) => {
        element.sortMethod =  element.label === filteredColumns[0].label ? currentSortMethod : 'default';
    });

    const sortedData = _.orderBy(this.state.data, filteredColumns[0].label, filteredColumns[0].sortMethod);
    this.setState ({
      data: sortedData,
      columns: copyColumns
    });
  }

  getDisplayedData(data, filters) {
    return data.filter(element => {
      return filters.indexOf(element.type) !== -1;
    });
  }

  render() {
    const {columns, data, activeFilters} = this.state;
    return (
      <div className="App">
        <Filters changeActiveFilters={this.changeActiveFilters}/>
        <SortableTable
          columns={columns}
          data={this.getDisplayedData(data, activeFilters)}
          sortData={this.sortData}
        />
      </div>
    );
  }
}

export default App;
