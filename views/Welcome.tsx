import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableOpacity,
} from "react-native";

export const Welcome = ({ ...props }) => {
  const [date, setDate] = useState(new Date)
  const handleLogin = (event: NativeSyntheticEvent<NativeTouchEvent>) => {
    props.hideWelcome();
  };
  return (
    <View style={styles.registerContainer}>
      <Text style={styles.textStyle}>Juan Manuel Arce</Text>
      <View style={styles.loginContainer}>
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.touchableTextContainer} >
            <Text style={styles.touchableText} >
              Enter
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{...styles.touchableText, fontSize:13}}>{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Welcome;
