import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

const StackComponent = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{ title: "Página Inicial" }}
      />
      <Screen
        name="Perfil"
        component={Home}
        options={{ title: "Meu Perfil" }}
      />
    </Navigator>
  );
};

export default StackComponent;
