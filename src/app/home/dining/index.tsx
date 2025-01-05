import { View, Text, Image } from "react-native";
import React from "react";
import { emptyStyles as style } from "src/unistyles/emptyStyles";

const Dining = () => {
  return (
    <View style={style.container}>
      <Image
        style={style.emptyImage}
        source={require("@assets/images/coming_soon.jpg")}
      />
    </View>
  );
};

export default Dining;
