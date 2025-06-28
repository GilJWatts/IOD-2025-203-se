import axios from "axios";

const API_URL = "http://localhost:3000/api/tasks";

export const getAllTasks = () => {
  return axios.get(API_URL);
};

export const addTask = (taskText) => {
  return axios.post(API_URL, { text: taskText });
};

export const updateTask = (taskId, completed) => {
  return axios.put(`${API_URL}/${taskId}`, { completed });
};

export const deleteTask = (taskId) => {
  return axios.delete(`${API_URL}/${taskId}`);
};
