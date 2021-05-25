import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../context/context';
import IconButton from './ui/IconButton';
import checkIcon from '@iconify/icons-fa/check';
import trashIcon from '@iconify/icons-fa/trash';

const ButtonGroup = ({ is_completed, id }) => {
  const { deleteTodo, completeTodo } = useGlobalContext();

  return (
    <div className="flex items-center space-x-6">
      {!is_completed && (
        <>
          <IconButton
            icon={checkIcon}
            iconClass="text-white text-icon"
            handleClick={() => completeTodo(id)}
          />
          <IconButton
            icon={trashIcon}
            iconClass="text-white text-icon-lg"
            handleClick={() => deleteTodo(id)}
          />
        </>
      )}
    </div>
  );
};

ButtonGroup.propTypes = {
  id: PropTypes.string.isRequired,
  is_completed: PropTypes.number.isRequired,
};

const SubList = ({ id, name, due_date, is_completed }) => {
  return (
    <div
      className={`w-full flex justify-between items-center p-2.5 pr-5  rounded text-lg text-white shadow-custom  motion-safe:animate-fade-in-down ${
        is_completed ? 'bg-completed' : 'bg-task-active'
      }`}
    >
      <div>
        <h4>{name}</h4>
        <div className="mt-0.5 text-sm">
          <time dateTime="">{due_date}</time>
        </div>
      </div>
      <ButtonGroup is_completed={is_completed} id={id} />
    </div>
  );
};

SubList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  due_date: PropTypes.string.isRequired,
  is_completed: PropTypes.number.isRequired,
};

export default SubList;
