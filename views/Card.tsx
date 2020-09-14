import React, { JSXElementConstructor, ReactChild, ReactElement } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Card = ({ ...props }) => {
  const handlePress = () => {
    if (props.data) {
      props.navigation.navigate("Details", props.data);
    }
  };

  const renderImage = ():ReactElement => {
    if (props.image) {
      return (
        <View style={styles.cardImageStyle} key={`${props.id}-imageContainer`}>
          <Image
            key={`${props.id}-image`}
            style={styles.imageStyle}
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
      <TouchableOpacity style={styles.cardContainerStyle} onPress={handlePress}>
        {renderImage()}
        <View style={styles.cardTextStyle} key={`${props.id}-textContainer`}>
          <Text style={styles.textStyle} key={`${props.name}`}>
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

const styles = StyleSheet.create({
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

export default Card;
