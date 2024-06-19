import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native";
import { HomeProps, StackTypes } from "../routes/stack";

const Home = ({ navigation }: HomeProps) => {
  // const navigation = useNavigation<StackTypes>();

  const handlePress = () => {
    navigation.navigate("Perfil", { id: 26 });
  };

  const goToFeed = () => {
    navigation.navigate("Feed", { info: "Informação Confidencial!" });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="navegar para perfil" onPress={handlePress} />
      <Button title="navegar para Feed" onPress={goToFeed} />
    </View>
  );
};

export default Home;
