import React, {  useContext } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { AppContext } from "../context/appContext";
import {footerStyle} from "./viewStyles";

const Footer = () => {
  const {searchCategory, setSearchCategory} = useContext(AppContext);
  

  const displayedFocus = (type: string):boolean => {
    return type === searchCategory;
  };

  const handleSearchCategoryChange = (searchType: string) =>{
    setSearchCategory(searchType)
  }

  const characterViewStyle = displayedFocus("characters")
    ? { ...footerStyle.textContainer, ...footerStyle.textContainerFocus }
    : footerStyle.textContainer;
  const characterTextStyle = displayedFocus("characters")
    ? { ...footerStyle.textStyle, ...footerStyle.textStyleFocus }
    : footerStyle.textStyle;
  const episodesViewStyle = displayedFocus("episodes")
    ? {
        ...footerStyle.textContainer,
        ...footerStyle.separatorStyle,
        ...footerStyle.textContainerFocus,
      }
    : { ...footerStyle.textContainer, ...footerStyle.separatorStyle };
  const episodesTextStyle = displayedFocus("episodes")
    ? { ...footerStyle.textStyle, ...footerStyle.textStyleFocus }
    : footerStyle.textStyle;
  const locationsViewStyle = displayedFocus("locations")
    ? { ...footerStyle.textContainer, ...footerStyle.textContainerFocus }
    : footerStyle.textContainer;
  const locationsTextStyle = displayedFocus("locations")
    ? { ...footerStyle.textStyle, ...footerStyle.textStyleFocus }
    : footerStyle.textStyle;
  return (
    <View style={footerStyle.searchBarContainer}>
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

export default Footer;
