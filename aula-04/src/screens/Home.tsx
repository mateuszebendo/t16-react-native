import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native";
import { StackTypes } from "../routes/stack";

const Home = () => {
  const navigation = useNavigation<StackTypes>();

  const handlePress = () => {
    navigation.navigate("Perfil", { id: 55 });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="navegar para perfil" onPress={handlePress} />
    </View>
  );
};

export default Home;
