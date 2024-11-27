import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";

import { RootStackParamList } from "../@types/@react-navigation/native";
import { Config } from "../pages/Config";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Config" component={Config} />
    </Navigator>
  );
}
