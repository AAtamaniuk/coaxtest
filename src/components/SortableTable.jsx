import React from 'react';
import PropTypes from 'prop-types';

import SortableHeader from './SortableHeader';
import SortableBody from './SortableBody';

const SortableTable = ({data, sortData}) => {
  return (
    <table className="SortableTable">
      <SortableHeader sortData={sortData}/>
      <SortableBody data={data} />
    </table>
  );
};

SortableTable.propTypes = {
  sortData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};

export default SortableTable;
