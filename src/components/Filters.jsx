import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  return (
    <fieldset className="Filters">
      <legend>Choose category</legend>
      <div>
        <input type="checkbox" id="notebooks" name="interest" value="notebook" />
          <label htmlFor="coding">Notebooks</label>
      </div>
      <div>
        <input type="checkbox" id="tablets" name="interest" value="tablet" />
          <label htmlFor="music">Tablets</label>
      </div>
      <div>
        <input type="checkbox" id="phones" name="interest" value="phone" />
        <label htmlFor="music">Mobile phones</label>
      </div>
    </fieldset>
  );
};

Filters.propTypes = {};
Filters.defaultProps = {};

export default Filters;
