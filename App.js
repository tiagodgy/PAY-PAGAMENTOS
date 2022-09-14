import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import FirstPage from "./src/screens/FirstPage";
import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import ChargeDate from "./src/screens/ChargeDate";
import Policy from "./src/screens/Policy";
import List from "./src/screens/List";
import Scan from "./src/screens/Scan";
import Profile from "./src/screens/Profile";
import Adress from "./src/screens/Adress";

function HomeNavigator() {
  return (
    <Tab.Navigator initialRouteName="Scan">
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name={"scan-circle-outline"} color={color} size={size} />
          ),
          title: "Escanear",
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name={"list-circle-outline"} color={color} size={size} />
          ),
          title: "Boletos",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Icon name={"person-circle-outline"} color={color} size={size} />
          ),
          title: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Adress"
          component={Adress}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="ChargeDate"
          component={ChargeDate}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Policy"
          component={Policy}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
