import {
  View,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import {
  deleteTaskbyId,
  getAllTasks,
  postNewTask,
} from "../../services/tasksClient";
import { Tasks } from "../../types";
import { FontAwesome5 } from "@expo/vector-icons";
import api from "../../services/api";

const Home = () => {
  const [allTasks, setAllTasks] = useState<Tasks[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // async function fetchData(){}
  const getTasks = async () => {
    setLoading(true);
    try {
      const tasks = await getAllTasks();
      setAllTasks(tasks);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const postTask = async () => {
    const newTask = {
      title: title,
      description: description,
      status: "pendente",
    };

    try {
      const task = await postNewTask(newTask);
      setAllTasks([...allTasks, task]);
      console.log(task);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const deletedTask = await deleteTaskbyId(id);
      setAllTasks(allTasks.filter((item) => item.id !== deletedTask.id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Lista de Tarefas</Text>
      {/* <Button title="buscar tarefas" onPress={getTasks} disabled={isLoading} /> */}
      <View>
        <TextInput
          placeholder="Título da Tarefa"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Descrição da Tarefa"
          value={description}
          onChangeText={setDescription}
        />
        <Button title="adicionar tarefa" onPress={postTask} />
      </View>
      <FlatList
        data={allTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <FontAwesome5 name="trash-alt" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
