import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import checkIcon from '@iconify/icons-fa/check';
import eraserIcon from '@iconify/icons-fa/eraser';
import { useGlobalContext } from '../context/context';

const InputTask = () => {
  const { addTask } = useGlobalContext();

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(title);
    setTitle('');
  };

  return (
    <form
      className="focus-within:bg-input-focus transition w-full p-2.5 bg-input flex items-center justify-between rounded"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="w-full bg-transparent text-lg border-none text-white placeholder-placeholder focus:outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add category"
      />
      {title && (
        <div className="flex items-center space-x-3 pl-2 pr-1">
          <button type="submit" className="icon">
            <Icon icon={checkIcon} className="text-white text-icon" />
          </button>
          <button type="reset" onClick={() => setTitle('')} className="icon">
            <Icon icon={eraserIcon} className="text-white text-icon" />
          </button>
        </div>
      )}
    </form>
  );
};

export default InputTask;
