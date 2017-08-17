import React from 'react';
import PropTypes from 'prop-types';

const SortableHeader = ({columns, sortData}) => {
  return(
    <thead className="SortableHeader">
    <tr className="SortableHeader__row">
      {columns.map((element, index) =>
        <th
          className="SortableHeader__cell"
          key={index}
          role="button"
          data-label={element.label}
          onClick={(e) => sortData(e.target.getAttribute('data-label'))}
        >
          {element.name}
        </th>
      )}
    </tr>
    </thead>
  )
};

SortableHeader.propTypes = {};
SortableHeader.defaultProps = {};

export default SortableHeader;
