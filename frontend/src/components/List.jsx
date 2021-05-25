import React from 'react';
import PropTypes from 'prop-types';
import SubList from './SubList';
import { NoData } from './others';

const List = ({ title, data }) => {
  return (
    <div>
      <h3 className="text-lg text-white font-bold capitalize">{title}</h3>
      <div className="mt-4 space-y-4">
        {data.length > 0 ? (
          <>
            {data.map((item) => (
              <SubList key={item.id} {...item} completed={item.isCompleted} />
            ))}
          </>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
