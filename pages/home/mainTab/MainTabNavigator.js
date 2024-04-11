import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Message from "../../notification/message/Message";
import { styles } from "./styles";

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Notification") {
            iconName = "bell";
          } else if (route.name === "Profile") {
            iconName = "account";
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={color}
            ></MaterialCommunityIcons>
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: styles.tabBarIcon,
      })}
    >
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          headerShown: false,
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
