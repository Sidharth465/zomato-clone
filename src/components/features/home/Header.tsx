import React from "react";
import { View } from "react-native";
import LocationHeader from "./LocationHeader";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <>
      <LocationHeader />
      <Searchbar />
    </>
  );
};

export default Header;
