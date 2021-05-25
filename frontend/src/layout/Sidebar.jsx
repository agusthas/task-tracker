import React from 'react';
import Tasks from '../components/Tasks';
import Divider from '../components/ui/Divider';
import DeleteAllButton from '../components/ui/DeleteAllButton';
import InputTask from '../components/InputTask';

const Sidebar = () => {
  return (
    <section className="min-h-screen w-[37.39pc] p-[50px] bg-blue-sidebar">
      <div className="space-y-3.5">
        <InputTask />
        <Divider />
        <DeleteAllButton />
        <Divider />
        <Tasks />
      </div>
    </section>
  );
};

export default Sidebar;
