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

const Filters = ({changeActiveFilters}) => {
  return (
    <fieldset className="Filters">
      <legend>Choose category</legend>
      {FILTERS.map((element) =>
        <div key={element.id}>
          <input
            type="checkbox"
            id={element.label}
            value={element.label}
            onChange={(e) => changeActiveFilters(e.target.value)}/>
          <label htmlFor="coding">{element.name}</label>
        </div>
      )}
    </fieldset>
  );
};

Filters.propTypes = {
  changeActiveFilters: PropTypes.func.isRequired
};

export default Filters;
