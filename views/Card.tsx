import React, { ReactElement } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {cardStyles} from "./viewStyles"

const Card = ({ ...props }) => {
  const handlePress = () => {
    if (props.data) {
      props.navigation.navigate("Details", props.data);
    }
  };

  const renderImage = ():ReactElement => {
    if (props.image) {
      return (
        <View style={cardStyles.cardImageStyle} key={`${props.id}-imageContainer`}>
          <Image
            key={`${props.id}-image`}
            style={cardStyles.imageStyle}
            source={{
              uri: props.image,
            }}
          />
        </View>
      );
    }
    else return <View key="FallBackView"/>
  };
  return (
    <View>
      <TouchableOpacity style={cardStyles.cardContainerStyle} onPress={handlePress}>
        {renderImage()}
        <View style={cardStyles.cardTextStyle} key={`${props.id}-textContainer`}>
          <Text style={cardStyles.textStyle} key={`${props.name}`}>
            {props.name}{" "}
          </Text>
          <Text key={`${props.episode || props.dimension}`}>
            {props.episode ? props.episode : props.dimension}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
