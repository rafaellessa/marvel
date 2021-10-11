import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import Background from "../components/Background";
import CustomTabBar from "../components/CustomTabBar";
import Characters from "../screens/Characters";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";

interface RootRouteScreens {
  name: string;
  component: FunctionComponent<any>;
  translationName: string;
  iconName: string;
}

export const navigations: RootRouteScreens[] = [
  {
    name: "Favorites",
    component: Favorites,
    translationName: "Favoritos",
    iconName: "favorite",
  },
  {
    name: "Characters",
    component: Characters,
    translationName: "Personagens",
    iconName: "person-pin",
  },
  {
    name: "Profile",
    component: Profile,
    translationName: "Perfil",
    iconName: "person",
  },
];

export const TabRoutes: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const renderNavigations = navigations.map(
    ({ name, component: Component }) => {
      return (
        <Tab.Screen key={name} name={name}>
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
        </Tab.Screen>
      );
    }
  );

  return (
    <Tab.Navigator
      initialRouteName="Characters"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      {renderNavigations}
    </Tab.Navigator>
  );
};
