import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FunctionComponent } from "react";
import { StatusBar } from "react-native";
import Background from "../../components/Background";
import CustomTabBar from "../../components/CustomTabBar";
import Characters from "../../screens/Characters";
import Favorites from "../../screens/Favorites";
import Profile from "../../screens/Profile";

interface RootRouteScreens {
  name: string;
  component: FunctionComponent<any>;
  translationName?: string;
  iconName?: string;
}

export const tabNavigations: RootRouteScreens[] = [
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

const Tab: React.FC = () => {
  const MyTab = createBottomTabNavigator();
  const renderTabNavigations = tabNavigations.map(
    ({ name, component: Component }) => {
      return (
        <MyTab.Screen key={name} name={name}>
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
        </MyTab.Screen>
      );
    }
  );

  return (
    <MyTab.Navigator
      initialRouteName="Characters"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      {renderTabNavigations}
    </MyTab.Navigator>
  );
};

export default Tab;
