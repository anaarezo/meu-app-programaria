import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/screens/Login";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#5f4a98"
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "App progra{m}aria",
              headerStyle: {
                backgroundColor: "#ffffff",
              },
              headerTintColor: "#5f4a98",
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: "#692ca0",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
