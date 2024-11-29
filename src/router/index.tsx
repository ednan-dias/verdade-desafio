import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/Home";

import { RootStackParamList } from "../@types/@react-navigation/native";
import { AddCard } from "../pages/AddCard";
import { Config } from "../pages/Config";
import { ListCards } from "../pages/ListCards";
import { AddPlayers } from "../pages/AddPlayers";

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
      <Screen name="AddCard" component={AddCard} />
      <Screen name="ListCards" component={ListCards} />
      <Screen name="AddPlayers" component={AddPlayers} />
    </Navigator>
  );
}
