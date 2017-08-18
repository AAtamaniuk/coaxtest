import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars'

const SortableBody = ({data}) => {
  return (
    <tbody>
    {
      data.map((element) =>
        <tr key={element.id}>
          <td>{element.name}</td>
          <td>
            <ReactStars
              className="Star"
              value={element.rating}
              size={25}
              edit={false}
            />
          </td>
          <td>{`$${element.price}`}</td>
        </tr>
      )
    }
    </tbody>
  )
};

SortableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default SortableBody;
