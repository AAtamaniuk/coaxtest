import React from 'react';
import PropTypes from 'prop-types';

const TABLE_COLUMNS = [
  {
    id: 1,
    name: 'Product Name',
    label: 'name'
  }, {
    id: 2,
    name: 'Rating',
    label: 'rating'
  }, {
    id: 3,
    name: 'Price',
    label: 'price'
  }
];

const SortableHeader = ({sortData}) => {
  return (
    <thead className="SortableHeader">
    <tr>
      {TABLE_COLUMNS.map((element) =>
        <th
          key={element.id}
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

SortableHeader.propTypes = {
  sortData: PropTypes.func.isRequired
};

export default SortableHeader;
