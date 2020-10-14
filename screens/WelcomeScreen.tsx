import React, { useState } from "react";
import {Text, View, TouchableOpacity} from "react-native";
import { welcomeScreenStyle} from "./screenStyles"
export const Welcome = ({ ...props }) => {
  const [date] = useState(new Date());
  return (
    <View style={welcomeScreenStyle.registerContainer}>
      <View style={welcomeScreenStyle.titleContainer}>
        <Text style={welcomeScreenStyle.titleText}>Rick & Morty Challenge</Text>
      </View>
      <View style={welcomeScreenStyle.textContainer}>
        <Text style={welcomeScreenStyle.textStyle}>Juan Manuel Arce</Text>
      </View>

      <View style={welcomeScreenStyle.loginContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <View style={welcomeScreenStyle.touchableTextContainer}>
            <Text style={welcomeScreenStyle.touchableText}>Enter</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={welcomeScreenStyle.footerContainer}>
        <Text style={{ ...welcomeScreenStyle.touchableText, fontSize: 18 }}>
          {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
