import React from 'react';
import PropTypes from 'prop-types';

const SortableHeader = ({columns}) => {
  return(
    <thead className="SortableHeader">
    <tr className="SortableHeader__row">
      {columns.map((element, index) =>
        <th className="SortableHeader__cell" key={index} role="button">{element.label}</th>
      )}
    </tr>
    </thead>
  )
};

SortableHeader.propTypes = {};
SortableHeader.defaultProps = {};

export default SortableHeader;
