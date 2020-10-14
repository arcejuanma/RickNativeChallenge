import React, {  useContext } from "react";
import {Text, View, TextInput, TextInputChangeEventData, NativeSyntheticEvent} from "react-native";
import { AppContext } from "../context/appContext";
import {headerStyle} from "./viewStyles"

export const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const handleSearchTerm = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setSearchTerm(event.nativeEvent.text);
  };

  return (
    <View style={headerStyle.headerContainer}>
      <Text style={headerStyle.headerText}>Rick & Morty Searcher</Text>

      <TextInput
        style={headerStyle.searchInput}
        value={searchTerm}
        onChange={handleSearchTerm}
        placeholder="Start typing to search"
      />
    </View>
  );
};

