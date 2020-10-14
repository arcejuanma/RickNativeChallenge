import { StyleSheet } from "react-native";
import { colors } from "../colors"; 

export const detailScreenStyle = StyleSheet.create({
    textStyle: {
      display: "flex",
      alignItems: "center",
      margin: 8,
    },
    detailViewNameContainerStyle: {
      display: "flex",
      alignItems: "center",
      margin: 8,
    },
    detailViewTextContainerStyle: {
      marginTop: 5,
    },
    itemTextStyle: {
      fontSize: 18,
      marginLeft: 12,
    },
    image:{
        height: 400
    }
  });

  export const homeScreenStyle = StyleSheet.create({
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

  export const welcomeScreenStyle = StyleSheet.create({
    registerContainer: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: colors.backgroundColor,
    },
    titleText: {
      color: "white",
      fontSize: 30,
    },
    titleContainer: {
      minHeight: "10%",
      marginTop:"20%"
    },
    loginContainer: {
      display: "flex",
      alignItems: "center",
      minHeight: "20%",
    },
    footerContainer: {},
    textContainer: {
      minHeight: "40%"
    },
    textStyle: {
      fontSize: 20,
      color: "white",
      marginBottom: "15%",
    },
    buttonContainer: {
      minWidth: "40%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "red",
    },
  
    touchableTextContainer: {
      minHeight: "30%",
      minWidth: "35%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderColor: "lightgrey",
      borderRadius: 7,
    },
    touchableText: {
      fontSize: 30,
      fontWeight: "bold",
      color: "white",
    },
  });