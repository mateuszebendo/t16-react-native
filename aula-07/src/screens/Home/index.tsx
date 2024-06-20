import { View, Text, Button, ActivityIndicator, FlatList } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { getAllTasks } from "../../services/tasksClient";
import { Tasks } from "../../types";

const Home = () => {
  const [allTasks, setAllTasks] = useState<Tasks[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
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

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Lista de Tarefas</Text>
      <Button title="buscar tarefas" onPress={getTasks} disabled={isLoading} />
      <FlatList
        data={allTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
