import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();

import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import SettingsScreen from "./screens/Settings";

function Screens() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#517fa4",
        tabBarInactiveTintColor: "#262626",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "Anasayfa",
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <Icon name="home" color={color} />;
            return <Icon name="home" color={color} />;
          },
        }}
      />
      <Tab.Screen
        options={{
          headerTitle: "Anasayfa",
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <Icon name="person-outline" color={color} />;
            return <Icon name="person-outline" color={color} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: "Anasayfa",
          tabBarIcon: ({ focused, color }) => {
            if (focused) return <Icon name="settings" color={color} />;
            return <Icon name="settings" color={color} />;
          },
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default Screens;
