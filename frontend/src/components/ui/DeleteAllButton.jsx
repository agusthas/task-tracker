import React from 'react';
import { useGlobalContext } from '../../context/context';

const DeleteAllButton = () => {
  const { deleteAllTask } = useGlobalContext();

  return (
    <button
      className="w-full flex p-2.5 bg-task-red rounded text-lg text-white shadow-custom focus:outline-none focus:ring"
      onClick={deleteAllTask}
    >
      Clear All
    </button>
  );
};

export default DeleteAllButton;
