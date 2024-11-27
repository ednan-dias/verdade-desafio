import { useEffect } from "react";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";

import { AppProvider } from "./providers";

export function App() {
  const [loaded, error] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <AppProvider />;
}
