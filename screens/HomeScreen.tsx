import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header } from "../views/Header";
import ResultsView from "../views/ResultsView";
import Footer from "../views/Footer";

const HomeScreen = ({ ...props }) => {
  return (
    <View style={styles.appContainer}>
      
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.resultContainer}>
        <ResultsView navigation={props.navigation} />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    alignContent: "stretch",
    alignItems: "stretch",
    minHeight: "100%",
  },
  headerContainer: {
    display: "flex",
    backgroundColor: "#87336b",
    minHeight: "15%",
  },
  resultContainer: {
    height: "80%",
  },
  footerContainer: {
    height: "5%",
  },
});

export default HomeScreen;
