import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { navigations } from "../../routes/TabRoutes";
import { Container, TabItem, TabItemIcon, TabItemTitle } from "./styles";

interface CustomTabBarProps extends BottomTabBarProps {}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ navigation }) => {
  const [activeScreen, setActiveScreen] = useState("Characters");

  const handleNavigate = (screenName: string) => {
    navigation.navigate(screenName);
    setActiveScreen(screenName);
  };

  return (
    <Container>
      {navigations.map((item, index) => (
        <TabItem key={index} onPress={() => handleNavigate(item.name)}>
          <TabItemIcon
            name={item.iconName}
            active={item.name === activeScreen}
          />
          <TabItemTitle active={item.name === activeScreen}>
            {item.translationName}
          </TabItemTitle>
        </TabItem>
      ))}
    </Container>
  );
};

export default CustomTabBar;
