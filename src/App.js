import React, {Component} from 'react';
import _ from 'lodash';
import './App.css';

import data from './data';
import Filters from './components/Filters';
import SortableTable from './components/SortableTable';


class App extends Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      data: data,
      sortBy: '',
      sortMethod: 'asc'
    };

    this.changeFilters = this.changeFilters.bind(this);
    this.getDisplayedData = this.getDisplayedData.bind(this);
    this.sortData = this.sortData.bind(this);
    this.normalizeData = this.normalizeData.bind(this);
  }

  componentDidMount() {
    this.normalizeData()
  }

  normalizeData() {
    const data = _.cloneDeep(this.state.data);
    const newData = _.map(data).map(function(x) {
      return _.assign(x, {
        price: parseInt(x.price.slice(1), 10)
      });
    });
    this.setState({
      data: newData
    });
  }

  changeFilters(value) {
    const filters = [...this.state.filters];
    const index = filters.indexOf(value);
    index === -1 ? filters.push(value) : filters.splice(index, 1);
    this.setState({
      filters
    });
  }

  sortData(label) {
    let {sortBy, sortMethod} = this.state;

    if (label !== sortBy)  {
      sortBy = label;
      sortMethod = 'asc';
    } else {
      sortMethod = sortMethod === 'asc' ?  'desc' : 'asc';
    }

    const data = _.orderBy(_.cloneDeep(this.state.data), sortBy, sortMethod);

    this.setState({
      sortBy,
      sortMethod,
      data
    });
  }

  getDisplayedData(data, filters) {
    return data.filter(element => {
      return filters.indexOf(element.type) !== -1;
    });
  }

  render() {
    const {data, filters} = this.state;
    return (
      <div className="App">
        <Filters changeActiveFilters={this.changeFilters}/>
        <SortableTable
          data={this.getDisplayedData(data, filters)}
          sortData={this.sortData}
        />
      </div>
    );
  }
}

export default App;
