import api from "./api";

export const getAllTasks = async () => {
  const { data } = await api.get("/tasks");
  return data;
};
