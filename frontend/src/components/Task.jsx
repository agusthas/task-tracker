import React, { useState } from 'react';
import { InlineIcon } from '@iconify/react';
import trashIcon from '@iconify/icons-fa/trash';
import pencilIcon from '@iconify/icons-fa/pencil';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../context/context';

const colors = [
  'rgba(231,111,81,1)',
  'rgba(238,137,89,1)',
  'rgba(244,162,97,1)',
  'rgba(239,179,102,1)',
];

const InlineEdit = ({ title }) => {
  const { setEditId, updateTaskTitle } = useGlobalContext();

  const [name, setName] = useState(title);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTaskTitle(name);
  };

  return (
    <form className="inline-block w-full pr-8" onSubmit={handleSubmit}>
      <input
        className="w-full text-lg rounded-md bg-red-600 border border-gray-400 text-white px-2 focus:outline-none"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => setEditId(null)}
        autoFocus
      />
    </form>
  );
};

InlineEdit.propTypes = {
  title: PropTypes.string,
};

const Task = ({
  title,
  active,
  deleteSpecificTask,
  getCurrent,
  setIsTaskEditing,
  isTaskEditing,
}) => {
  //eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState(colors[Math.floor(Math.random() * 4)]);

  const deleteClick = (e) => {
    e.stopPropagation();

    deleteSpecificTask();
  };

  const editingClick = (e) => {
    e.stopPropagation();

    setIsTaskEditing();
  };

  return (
    <button
      className={`w-full flex justify-between items-center p-2.5 pr-5 rounded text-lg text-white shadow-custom focus:outline-none focus:ring transform transition-all animate-fade-in-down duration-300 ease-out ${
        active && 'scale-105'
      }`}
      style={{
        backgroundColor: `${active ? 'rgba(230, 57, 70, 1)' : color}`,
      }}
      onClick={getCurrent}
    >
      {isTaskEditing ? <InlineEdit title={title} /> : <span>{title}</span>}
      <span className="inline-flex space-x-4 items-center">
        {!isTaskEditing && (
          <span onClick={editingClick} className="icon">
            <InlineIcon icon={pencilIcon} className="text-white text-lg" />
          </span>
        )}
        <span onClick={deleteClick} className="icon">
          <InlineIcon icon={trashIcon} className="text-white text-xl" />
        </span>
      </span>
    </button>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  deleteSpecificTask: PropTypes.func.isRequired,
  setIsTaskEditing: PropTypes.func.isRequired,
  getCurrent: PropTypes.func.isRequired,
  isTaskEditing: PropTypes.bool,
};

export default Task;
