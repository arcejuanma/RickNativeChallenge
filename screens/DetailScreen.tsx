import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Card from "../views/Card";
const DetailScreen = ({ ...props }) => {
  let data = props.route.params;
  let name = data.name;
  let image = data.image;
  let skipPropertiesArray = ["__typename", "id", "name", "image"];
  return (
    <ScrollView key={"detailViewContainer"}>
      {data["__typename"] === "Character" ? (
        <Image
          key={"detailViewImage"}
          style={{ height: 400 }}
          source={{ uri: image }}
        />
      ) : (
        <View key={"detailViewImagePlaceHolder"}></View>
      )}
      <View
        key={"detailViewNameContainer"}
        style={style.detailViewNameContainerStyle}
      >
        <Text style={style.textStyle}>{name}</Text>
      </View>
      <View
        style={style.detailViewTextContainerStyle}
        key={"detailViewTextContainer"}
      >
        {Object.keys(data).map((item) => {
          if (
            !skipPropertiesArray.includes(item) &&
            typeof data[item] === "string"
          ) {
            return (
              <Text style={style.itemTextStyle} key={`${item}`}>
                {item}: {data[item] || "N/A"}
              </Text>
            );
          } else if (Array.isArray(data[item])) {
            return (
              <ScrollView key={"detailViewImage"}>
                {data[item].slice(0, 5).map((char: any) => {
                  return (
                    <Card
                      key={`${char.id}-${char.name}detailView`}
                      name={char.name}
                      image={char.image}
                    />
                  );
                })}
              </ScrollView>
            );
          }
        })}
      </View>
      <View></View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
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
});
export default DetailScreen;
