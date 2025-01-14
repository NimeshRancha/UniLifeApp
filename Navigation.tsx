import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BoardingScreen from "./src/views/BoardingScreen";
import BoardingDetailsScreen from "./src/views/BoardingDetailsScreen";
import { StackParamList } from "./navigationTypes";

const Stack = createStackNavigator<StackParamList>();

export default function Navigation() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="BoardingScreen">
        <Stack.Screen
          name="BoardingScreen"
          component={BoardingScreen}
          options={{ title: "Boarding List" }}
        />
        <Stack.Screen
          name="BoardingDetailsScreen"
          component={BoardingDetailsScreen}
          options={{ title: "Boarding Details" }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
