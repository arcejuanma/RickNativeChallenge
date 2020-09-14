import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, AppRegistry } from "react-native";
import { Header } from "./views/Header";
import Footer from "./views/Footer";
import ResultsView from "./views/ResultsView";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppContextProvider } from "./context/appContext";
import { client } from "./utils/queries";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import DetailScreen from "./screens/DetailScreen"
import {colors} from "./colors"
export default function App() {
  const Stack = createStackNavigator();
  return (
    <ApolloProvider client={client}>
      <AppContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Welcome"
              component={WelcomeScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{ headerShown: true , headerStyle: {
                backgroundColor: colors.backgroundColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }}}
              name="Details"
              component={DetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("MyApplication", () => App);
