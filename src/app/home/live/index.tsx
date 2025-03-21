import { View, Text, Image } from "react-native";
import React from "react";
import { emptyStyles as style } from "src/unistyles/emptyStyles";
import * as Animatable from "react-native-animatable";

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
      <Animatable.Text style={{ fontSize: 36,color:"#fff",marginTop:"40%" }} animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
      <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
    </View>
  );
};

export default Live;
