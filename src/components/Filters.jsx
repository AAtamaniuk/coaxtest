import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({changeActiveFilters}) => {
  return (
    <fieldset className="Filters">
      <legend>Choose category</legend>
      <div>
        <input
          type="checkbox"
          id="notebooks"
          value="notebook"
          onChange={(e) => changeActiveFilters(e.target.value)}/>
          <label htmlFor="coding">Notebooks</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="tablets"
          value="tablet"
          onChange={(e) => changeActiveFilters(e.target.value)}/>
          <label htmlFor="music">Tablets</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="phones"
          value="phone"
          onChange={(e) => changeActiveFilters(e.target.value)}/>
        <label htmlFor="music">Mobile phones</label>
      </div>
    </fieldset>
  );
};

Filters.propTypes = {};
Filters.defaultProps = {};

export default Filters;
