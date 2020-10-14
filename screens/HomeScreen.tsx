import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header } from "../views/Header";
import ResultsView from "../views/ResultsView";
import Footer from "../views/Footer";
import {homeScreenStyle} from "./screenStyles"

const HomeScreen = ({ ...props }) => {
  return (
    <View style={homeScreenStyle.appContainer}>
      
      <View style={homeScreenStyle.headerContainer}>
        <Header />
      </View>
      <View style={homeScreenStyle.resultContainer}>
        <ResultsView navigation={props.navigation} />
      </View>
      <View style={homeScreenStyle.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

export default HomeScreen;
