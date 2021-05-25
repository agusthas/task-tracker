import axios from 'axios';

export const fetchTasks = async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/api/task');

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postTask = async (title) => {
  try {
    const { data } = await axios.post('http://localhost:8000/api/task', {
      title: title,
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteTask = async (id) => {
  try {
    const { data } = await axios.delete(`http://localhost:8000/api/task/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteAllTask = async () => {
  try {
    const { data } = await axios.delete(`http://localhost:8000/api/task`);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const patchTaskTitle = async (newTitle, editId) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:8000/api/task/${editId}`,
      newTitle,
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postTodo = async (newTodo, activeId) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8000/api/todo/${activeId}`,
      newTodo,
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deleteSingleTodo = async (todoId) => {
  try {
    const data = await axios.delete(`http://localhost:8000/api/todo/${todoId}`);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const patchCompletedTodo = async (todoId) => {
  try {
    const data = await axios.patch(
      `http://localhost:8000/api/todo/complete/${todoId}`,
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
