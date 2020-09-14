# RickNativeChallenge
Project build using Yarn, Expo and Apollo Client.

Tested on Pixel 2 and Samsung Galaxy S10+

## `Starting:`
* yarn add
* yarn start

## `Project Structure:`
The project is divided in the following folders:
* Context: contains the Context for React State Management of Search Params.
* Screens: Composal of different Views.
* utils: Set of tools used by other components.
* views: set of React components 
* colors: Object with colors pallete.

## `Functionalities Implemented:`
* Search by Episodes, Characters or Locations
* Detail View of entities.
* Welcome Screen.
* Cache with previous search.
* Infinit Scroll of results.
* Flatlist of results for Network Optimization.

## `Next Steps:`
* Implement Dynamic filtering.

## `Screen:`
![Welcome Screen](https://github.com/arcejuanma/RickNativeChallenge/blob/master/screenshots/Welcome%20View.png)

![Home Screen](https://github.com/arcejuanma/RickNativeChallenge/blob/master/screenshots/Home%20View.png)

![Result Screen](https://github.com/arcejuanma/RickNativeChallenge/blob/master/screenshots/Results%20View.png)

![Result Loading](https://github.com/arcejuanma/RickNativeChallenge/blob/master/screenshots/loading.png)

![No Resuls](https://github.com/arcejuanma/RickNativeChallenge/blob/master/screenshots/No%20Results.png)

![Episode Details](https://github.com/arcejuanma/RickNativeChallenge/blob/master/screenshots/Episode%20Detail.png)

![Character Details](https://github.com/arcejuanma/RickNativeChallenge/blob/master/screenshots/Character%20Detail.png)

## `Bugs:`
* It has been reported that, when fetching for a entity that doesn't give any results (No Results message is displayed), erasing the search term and changing the 
entity to another, the "No Results" message doesn't disappeared. Steps needed: Search in "Episodes" Category for "Summer" (the no results message should appear) erase
the Search Term and change the category to "Characters". 
 
