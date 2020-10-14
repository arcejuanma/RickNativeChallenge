import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Card from "../views/Card";
import {detailScreenStyle} from "./screenStyles"
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
          style={detailScreenStyle.image}
          source={{ uri: image }}
        />
      ) : (
        <View key={"detailViewImagePlaceHolder"}></View>
      )}
      <View
        key={"detailViewNameContainer"}
        style={detailScreenStyle.detailViewNameContainerStyle}
      >
        <Text style={detailScreenStyle.textStyle}>{name}</Text>
      </View>
      <View
        style={detailScreenStyle.detailViewTextContainerStyle}
        key={"detailViewTextContainer"}
      >
        {Object.keys(data).map((item) => {
          if (
            !skipPropertiesArray.includes(item) &&
            typeof data[item] === "string"
          ) {
            return (
              <Text style={detailScreenStyle.itemTextStyle} key={`${item}`}>
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

export default DetailScreen;
