import React from 'react';
import PropTypes from 'prop-types';

const SortableBody = ({data}) => {
  return (
    <tbody>
    {
      data.map((element, index) =>
        <tr key={index}>
          <td>{element.name}</td>
          <td>{element.rating}</td>
          <td>{element.price}</td>
        </tr>
      )
    }
    </tbody>
  )
};

SortableBody.propTypes = {};
SortableBody.defaultProps = {};

export default SortableBody;
