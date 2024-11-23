import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import CreateAccountPage from "./CreateAccountPage";
import Dashboard from "./Dashboard";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} options={{ title: "University of Batangas" }} />
        <Stack.Screen name="CreateAccount" component={CreateAccountPage} options={{ title: "Create Account" }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ title: "Log In" }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: "Dashboard" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
