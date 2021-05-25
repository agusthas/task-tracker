import React from 'react';
import { useGlobalContext } from '../context/context';
import List from './List';

const Lists = () => {
  const { todo } = useGlobalContext();

  return (
    <div className="mt-5 space-y-6">
      <List title="to do" data={todo.filter((item) => !item['is_completed'])} />
      <List
        title="completed"
        data={todo.filter((item) => item['is_completed'])}
      />
    </div>
  );
};

export default Lists;
