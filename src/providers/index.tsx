import { NavigationContainer } from "@react-navigation/native";
import { Router } from "../router";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { PlayersProvider } from "../contexts/PlayersContext";

export function AppProvider() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <PlayersProvider>
          <GestureHandlerRootView
            style={{
              flex: 1,
              backgroundColor: "rgb(27, 38, 49)",
            }}
          >
            <Router />
            <Toast />
          </GestureHandlerRootView>
        </PlayersProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
