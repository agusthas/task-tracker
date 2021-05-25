import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import * as API from '../api';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [todo, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editId, setEditId] = useState(null);

  const addTask = async (title) => {
    try {
      const response = await API.postTask(title);
      if (response.response) {
        throw new Error(response.response.status);
      }

      setTask([...task, response]);
    } catch (error) {
      swal({
        title: 'Oops',
        text: `Server responded with ${error}`,
        icon: 'error',
      });
    }
  };

  const updateTaskTitle = async (title) => {
    try {
      const res = await API.patchTaskTitle({ title: title }, editId);

      if (res.response) {
        throw new Error(res.response.status);
      }

      setTask(
        task.map((item) => {
          if (item.id === editId) {
            return { ...item, title: title };
          }
          return item;
        }),
      );
      setEditId(null);
    } catch (error) {
      setEditId(null);
      swal({
        title: 'Oops',
        text: `Server responded with ${error}`,
        icon: 'error',
      });
    }
  };

  const deleteAllTask = async () => {
    try {
      const res = await API.deleteAllTask();

      if (res.response) {
        throw new Error(res.response.status);
      }
      setTask([]);
      setActiveId(null);
    } catch (error) {
      setActiveId(null);
      swal({
        title: 'Oops',
        text: `Server responded with ${error}`,
        icon: 'error',
      });
    }
  };

  const deleteSpecificTask = async (id) => {
    try {
      if (id === activeId) {
        setActiveId(null);
      }
      await API.deleteTask(id);
      setTask(task.filter((item) => item.id !== id));
    } catch (error) {
      swal({
        title: 'Oops',
        text: `Server responded with ${error}`,
        icon: 'error',
      });
    }
  };

  const getCurrent = (id) => {
    setActiveId(id);
    setTodo(task.find((item) => item.id === id)['todo']);
  };

  const addTodo = async ({ name, dueDate }) => {
    try {
      const data = await API.postTodo({ name, due_date: dueDate }, activeId);

      setTodo([...todo, data]);
    } catch (error) {
      swal({
        title: 'Oops',
        text: `Server responded with ${error}`,
        icon: 'error',
      });
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      await API.deleteSingleTodo(todoId);
      setTodo(todo.filter((item) => item.id !== todoId));
    } catch (error) {
      swal({
        title: 'Oops',
        text: `Server responded with ${error}`,
        icon: 'error',
      });
    }
  };

  const completeTodo = async (todoId) => {
    try {
      await API.patchCompletedTodo(todoId);
      setTodo(
        todo.map((item) => {
          if (item.id === todoId) {
            return { ...item, is_completed: 1 };
          }
          return item;
        }),
      );
    } catch (error) {
      swal({
        title: 'Oops',
        text: `Server responded with ${error}`,
        icon: 'error',
      });
    }
  };

  useEffect(() => {
    const getTasks = async () => {
      try {
        setIsLoading(true);
        const tasksFromServer = await API.fetchTasks();
        if (tasksFromServer.response) {
          throw new Error(tasksFromServer.response.status);
        }
        setTask(tasksFromServer);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        swal({
          title: 'Oops',
          text: `Server responded with ${error}`,
          icon: 'error',
          button: 'Refresh Page',
        }).then((willRefresh) => {
          if (willRefresh) {
            window.location.reload();
          }
        });
      }
    };

    getTasks();
  }, []);

  useEffect(() => {
    setTask(
      task.map((item) => {
        if (item.id === activeId) {
          return { ...item, todo: todo };
        }
        return item;
      }),
    );
  }, [todo]);

  return (
    <AppContext.Provider
      value={{
        task,
        editId,
        setEditId,
        addTask,
        deleteAllTask,
        deleteSpecificTask,
        activeId,
        setActiveId,
        getCurrent,
        todo,
        addTodo,
        deleteTodo,
        completeTodo,
        isLoading,
        updateTaskTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
