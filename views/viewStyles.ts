import { StyleSheet } from "react-native";
import { colors } from "../colors"; 

export const cardStyles = StyleSheet.create({
    cardContainerStyle: {
      display: "flex",
      flexDirection: "row",
      height: 100,
      borderColor: "black",
      borderWidth: 1,
      alignItems: "flex-start",
      marginBottom: 8,
      shadowColor: "#e1e1e1",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 6,
      marginTop: 8,
      backgroundColor: "#fafafa",
      borderRadius: 5,
      marginLeft: "1%",
    },
    cardImageStyle: {
      maxWidth: "30%",
      height: "100%",
      flexGrow: 1,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    cardTextStyle: {
      maxWidth: "60%",
      marginLeft: 6,
      display: "flex",
      marginTop: 5,
    },
    textStyle: {
      fontSize: 20,
    },
    imageStyle: {
      minHeight: "100%",
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
  });

  export const footerStyle = StyleSheet.create({
    searchBarContainer: {
      display: "flex",
      paddingTop: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textContainer: {
      minHeight: "100%",
      minWidth: "33%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    textContainerFocus: {
      backgroundColor: "grey",
    },
    textStyle: {
      fontSize: 15,
      fontWeight: "bold",
      color: "black",
    },
    textStyleFocus: {
      color: "white",
    },
    separatorStyle: {
      borderLeftColor: "lightgrey",
      borderRightColor: "lightgrey",
      borderLeftWidth: 1,
      borderRightWidth: 1,
    },
  });

  export const headerStyle = StyleSheet.create({
    headerContainer: {
      marginTop: "9%",
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerText: {
      color: "white",
      fontSize: 30,
    },
    searchInput: {
      borderColor: "grey",
      borderRadius: 8,
      backgroundColor: "white",
      width: "90%",
      height: 30,
      marginBottom: "2%",
      padding: 6,
    },
  });

  export const resultViewStyle = StyleSheet.create({
    resultsContainer: {
      display: "flex",
      minHeight: "100%",
      margin: 2,
    },
    container: {
      flex: 1,
      justifyContent: "center",
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
  });

  export const welcomeStyle = StyleSheet.create({
    registerContainer: {
      height: "97%",
      width: "100%",
      display: "flex",
      flexGrow: 0,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: "60%",
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
    loginContainer: {
      display: "flex",
      alignItems: "center",
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
      fontSize: 25,
      fontWeight: "bold",
      color:"white"
    },
  });