import React from 'react';
import PropTypes from 'prop-types';

const FILTERS = [
  {
    id: 1,
    name: 'Notebooks',
    label: 'notebook'
  }, {
    id: 2,
    name: 'Tablets',
    label: 'tablet'
  }, {
    id: 3,
    name: 'Mobile phones',
    label: 'phone'
  }
];

const Filters = ({changeFilters, filters}) => {
  return (
    <fieldset className="Filters">
      <legend>Choose category</legend>
      {FILTERS.map((element) =>
        <div key={element.id}>
          <input
            type="checkbox"
            id={element.label}
            value={element.label}
            checked={filters.includes(element.label)}
            onChange={(e) => changeFilters(e.target.value)}/>
          <label htmlFor="coding">{element.name}</label>
        </div>
      )}
    </fieldset>
  );
};

Filters.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired
};

export default Filters;
