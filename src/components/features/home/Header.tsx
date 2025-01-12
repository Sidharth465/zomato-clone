import { View, Text } from "react-native";
import React from "react";
import LocationHeader from "./LocationHeader";
import Graphics from "./Graphics";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <View>
      <LocationHeader />
      <Searchbar />
    </View>
  );
};

export default Header;
