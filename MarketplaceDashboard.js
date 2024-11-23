import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MarketplaceDashboard from "./MarketplaceDashboard";
import ProductDetails from "./ProductDetails"; // You would create a ProductDetails screen
import AddItem from "./AddItem"; // You would create an AddItem screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MarketplaceDashboard">
        <Stack.Screen name="MarketplaceDashboard" component={MarketplaceDashboard} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="AddItem" component={AddItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
