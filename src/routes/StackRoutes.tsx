import React, { FunctionComponent } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "react-native";
import Splash from "../screens/Splash";
import Characters from "../screens/Characters";
import SignIn from "../screens/SignIn";
import Background from "../components/Background";

interface RootRouteScreens {
  name: string;
  component: FunctionComponent<any>;
}

export const navigations: RootRouteScreens[] = [
  {
    name: "Splash",
    component: Splash,
  },
  {
    name: "Characters",
    component: Characters,
  },
  {
    name: "Signin",
    component: SignIn,
  },
];

const NavigationStack: React.FC = () => {
  const Stack = createStackNavigator();

  const renderNavigations = navigations.map(
    ({ name, component: Component }) => {
      return (
        <Stack.Screen key={name} name={name}>
          {(props) => (
            <Background>
              <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
              />
              <Component key={name} {...props} />
            </Background>
          )}
        </Stack.Screen>
      );
    }
  );

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      {renderNavigations}
    </Stack.Navigator>
  );
};

export default NavigationStack;
