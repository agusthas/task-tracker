import React from 'react';
import { useGlobalContext } from './context/context';
import Sidebar from './layout/Sidebar';
import TodoSection from './layout/TodoSection';
import Loading from './components/Loading';

// const Loading = () => {
//   return <h1 className="text-4xl bg-task-active"> LOADING .... </h1>;
// };

function App() {
  const { isLoading } = useGlobalContext();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="min-h-screen flex">
          <Sidebar />
          <TodoSection />
        </main>
      )}
    </>
  );
}

export default App;
