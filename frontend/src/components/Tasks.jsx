import React from 'react';
import { useGlobalContext } from '../context/context';
import Task from './Task';

const Tasks = () => {
  const {
    task,
    deleteSpecificTask,
    activeId,
    setActiveId,
    getCurrent,
    editId,
    setEditId,
  } = useGlobalContext();

  const editingTask = (id) => {
    setActiveId(id);
    setEditId(id);
    getCurrent(id);
  };

  return (
    <div className="space-y-3.5">
      {task.map((item) => {
        const { id, title } = item;
        return (
          <Task
            key={id}
            title={title}
            deleteSpecificTask={() => deleteSpecificTask(id)}
            getCurrent={() => getCurrent(id)}
            setIsTaskEditing={() => editingTask(id)}
            isTaskEditing={editId && editId === id}
            active={activeId === id}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
