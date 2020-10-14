import React, { useState } from "react";
import {Text, View, NativeSyntheticEvent, NativeTouchEvent, TouchableOpacity} from "react-native";
import {welcomeStyle} from "./viewStyles"

export const Welcome = ({ ...props }) => {
  const [date] = useState(new Date)
  const handleLogin = (event: NativeSyntheticEvent<NativeTouchEvent>) => {
    props.hideWelcome();
  };
  return (
    <View style={welcomeStyle.registerContainer}>
      <Text style={welcomeStyle.textStyle}>Juan Manuel Arce</Text>
      <View style={welcomeStyle.loginContainer}>
        <TouchableOpacity onPress={handleLogin}>
          <View style={welcomeStyle.touchableTextContainer} >
            <Text style={welcomeStyle.touchableText} >
              Enter
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{...welcomeStyle.touchableText, fontSize:13}}>{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</Text>
    </View>
  );
};

export default Welcome;
