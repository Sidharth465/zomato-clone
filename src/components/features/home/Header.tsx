import React, { forwardRef } from "react";
import LocationHeader from "./LocationHeader";
import Searchbar from "./Searchbar";

const Header = (props:any,ref:any) => {
  return (
    <>
      <LocationHeader />
      <Searchbar  ref = {ref}/>
    </>
  );
};

export default forwardRef(Header);
