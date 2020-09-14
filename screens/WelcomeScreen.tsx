import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableOpacity,
} from "react-native";
import { colors } from "../colors";

export const Welcome = ({ ...props }) => {
  const [date] = useState(new Date());
  return (
    <View style={styles.registerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Rick & Morty Challenge</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Juan Manuel Arce</Text>
      </View>

      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <View style={styles.touchableTextContainer}>
            <Text style={styles.touchableText}>Enter</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={{ ...styles.touchableText, fontSize: 18 }}>
          {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Welcome;
