import { createStackNavigator } from "@react-navigation/stack";
import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import Background from "../../components/Background";
import Details from "../../screens/Details";
import Tab from "../Tab";

interface RootRouteScreens {
  name: string;
  component: FunctionComponent<any>;
}

const stackNavigations: RootRouteScreens[] = [
  {
    name: "Home",
    component: Tab,
  },
  {
    name: "Details",
    component: Details,
  },
];

const StackNav: React.FC = () => {
  const Stack = createStackNavigator();

  const renderStackNavigations = stackNavigations.map(
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
      {renderStackNavigations}
    </Stack.Navigator>
  );
};

export default StackNav;
