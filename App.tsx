import React from "react";
import { ThemeProvider } from "styled-components/native";
import Background from "./src/components/Background";
import theme from "./src/global/theme";
import Splash from "./src/screens/Splash";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import SignIn from "./src/screens/SignIn";
import Characters from "./src/screens/Characters";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Characters />
      </Background>
    </ThemeProvider>
  );
};

export default App;
