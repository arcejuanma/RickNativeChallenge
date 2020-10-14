import React, { useState, useContext, useEffect, ReactElement } from "react";
import { Text, FlatList, View, ActivityIndicator} from "react-native";
import Card from "./Card";
import { AppContext } from "../context/appContext";
import { searchResultHandler } from "../utils/queries";
import {resultViewStyle} from "./viewStyles"

export interface Item {
  name: string;
  id: number;
  image: string;
}

const ResultContainer = ({ ...props }) => {
  const [renderData, setData] = useState([] as any);
  const { searchTerm, searchCategory } = useContext(AppContext);
  const [changeSearchCategory, setChangeSearchCategory] = useState(
    searchCategory
  );
  const [changeSearchTerm, setChangeSearchTerm] = useState(searchTerm);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchMore, setSearchMore] = useState(false);

  useEffect(() => {
    if (
      changeSearchCategory !== searchCategory ||
      changeSearchTerm !== searchTerm
    ) {
      setData([]);
      setCurrentPage(1);
      setChangeSearchCategory(searchCategory);
      setChangeSearchTerm(searchTerm);
    } else if (searchTerm.length > 2) {
      setLoading(true);
      setErrorMessage("");
      setDisplayError(false);
      const fetchData = async () =>
        searchResultHandler(searchCategory, searchTerm, currentPage);
      fetchData().then((data) => {
        setLoading(false);
        if (
          data?.results &&
          searchCategory === data?.searchCategory &&
          searchTerm == data?.searchTerm
        ) {
          setData(data.results);
          setDisplayError(false);
          setCurrentPage(data.nextPage ? data.nextPage : 0);
          setSearchMore(false);
        } else if (data?.error?.length) {
          setDisplayError(true);
          setErrorMessage(data.error);
        }
      });
    }
  }, [searchTerm, searchCategory, changeSearchCategory, changeSearchTerm]);

  const loadMoreResults = async () => {
    if (currentPage) {
      searchResultHandler(searchCategory, searchTerm, currentPage).then(
        (data) => {
          setData([...renderData, ...(data?.results || [])]);
          setCurrentPage(data?.nextPage ? data.nextPage : 0);
        }
      );
    }
  };



  const renderElements = ():ReactElement => {
    if (loading) {
      return (
        <View style={[resultViewStyle.container, resultViewStyle.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    if (!displayError) {
      return (
        <FlatList
          style={resultViewStyle.resultsContainer}
          data={renderData}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              navigation={props.navigation}
              data={item}
              image={item.image}
              dimension={item.dimension}
              episode={item.episode}
            />
          )}
          keyExtractor={(item) => item.id?.toString()}
          onEndReached={loadMoreResults}
          onEndReachedThreshold={0.1}
        />
      );
    } else if (displayError) {
      return (
        <View>
          <Text>{errorMessage}</Text>
        </View>
      );
    } else {
      return <View></View>;
    }
  };

  return renderElements();
};

export default ResultContainer;
