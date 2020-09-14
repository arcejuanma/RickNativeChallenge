import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import { AppContext } from "../context/appContext";

export const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const handleSearchTerm = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setSearchTerm(event.nativeEvent.text);
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Rick & Morty Searcher</Text>

      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChange={handleSearchTerm}
        placeholder="Start typing to search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: "9%",
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 30,
  },
  searchInput: {
    borderColor: "grey",
    borderRadius: 8,
    backgroundColor: "white",
    width: "90%",
    height: 30,
    marginBottom: "2%",
    padding: 6,
  },
});
