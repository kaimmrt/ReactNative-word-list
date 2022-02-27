import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamsList";

import { Icon } from "react-native-elements";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import SettingsScreen from "../screens/Settings";
import AddWord from "../screens/AddWord";

function TabBar() {
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

function Screens() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={TabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddWord" component={AddWord} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screens;
