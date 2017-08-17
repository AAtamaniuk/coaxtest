import React from 'react';
import PropTypes from 'prop-types';

import SortableHeader from './SortableHeader';
import SortableBody from './SortableBody';

const SortableTable = ({columns, data, sortData}) => {
  return (
    <table className="SortableTable">
      <SortableHeader columns={columns} sortData={sortData}/>
      <SortableBody data={data} />
    </table>
  );
};

SortableTable.propTypes = {};
SortableTable.defaultProps = {};

export default SortableTable;
