import React from 'react';
import InputTodo from '../components/InputTodo';
import Lists from '../components/Lists';
import { useGlobalContext } from '../context/context';

const ChooseAnyTask = () => {
  return <h2 className="text-4xl text-white font-bold">Choose any task</h2>;
};

const TodoSection = () => {
  const { activeId } = useGlobalContext();
  return (
    <section className="min-h-screen w-full p-[50px] bg-blue-main">
      <div className="">
        {activeId ? (
          <>
            <InputTodo />
            <Lists />
          </>
        ) : (
          <ChooseAnyTask />
        )}
      </div>
    </section>
  );
};

export default TodoSection;
