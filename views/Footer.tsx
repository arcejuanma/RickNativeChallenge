import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, NativeSyntheticEvent, GestureResponderEvent } from "react-native";
import { AppContext } from "../context/appContext";


const Footer = () => {
  const {searchCategory, setSearchCategory} = useContext(AppContext);
  

  const displayedFocus = (type: string):boolean => {
    return type === searchCategory;
  };

  const handleSearchCategoryChange = (searchType: string) =>{
    setSearchCategory(searchType)
  }

  const characterViewStyle = displayedFocus("characters")
    ? { ...styles.textContainer, ...styles.textContainerFocus }
    : styles.textContainer;
  const characterTextStyle = displayedFocus("characters")
    ? { ...styles.textStyle, ...styles.textStyleFocus }
    : styles.textStyle;
  const episodesViewStyle = displayedFocus("episodes")
    ? {
        ...styles.textContainer,
        ...styles.separatorStyle,
        ...styles.textContainerFocus,
      }
    : { ...styles.textContainer, ...styles.separatorStyle };
  const episodesTextStyle = displayedFocus("episodes")
    ? { ...styles.textStyle, ...styles.textStyleFocus }
    : styles.textStyle;
  const locationsViewStyle = displayedFocus("locations")
    ? { ...styles.textContainer, ...styles.textContainerFocus }
    : styles.textContainer;
  const locationsTextStyle = displayedFocus("locations")
    ? { ...styles.textStyle, ...styles.textStyleFocus }
    : styles.textStyle;
  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity  onPress={()=>handleSearchCategoryChange("characters")}>
        <View style={characterViewStyle}>
          <Text style={characterTextStyle}>Characters</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handleSearchCategoryChange("episodes")}>
        <View style={episodesViewStyle}>
          <Text style={episodesTextStyle}>Episodes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handleSearchCategoryChange("locations")}>
        <View style={locationsViewStyle}>
          <Text style={locationsTextStyle}>Locations</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Footer;
