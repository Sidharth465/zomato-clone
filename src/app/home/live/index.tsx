import { View, Text, Image } from "react-native";
import React from "react";
import { emptyStyles as style } from "src/unistyles/emptyStyles";

const Live = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Image
        style={style.emptyImage}
        source={require("@assets/images/coming_soon2.jpg")}
      />
    </View>
  );
};

export default Live;
