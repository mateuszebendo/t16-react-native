import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

type StackNavigation = {
  Home: undefined;
  Perfil: { id: number | string };
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const { Navigator, Screen } = createNativeStackNavigator<StackNavigation>();

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
        component={Perfil}
        options={{ title: "Meu Perfil" }}
      />
    </Navigator>
  );
};

export default StackComponent;
