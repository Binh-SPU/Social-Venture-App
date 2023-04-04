import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AccountScreen from "../Screens/AccountScreen";
import MessagesScreen from "../Screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account Stack"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{ headerBackTitle: "Account" }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
