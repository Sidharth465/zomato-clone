import { View, Text, Platform } from "react-native";
import React, { FC } from "react";
import LottieView from "lottie-react-native";
import { homeStyles as styles } from "src/unistyles/homeStyles";

const Graphics: FC = () => {
  return (
    <View style={styles.lottieContainer} pointerEvents="none">
      <LottieView
        autoPlay={true}
        loop={Platform.OS !== "android"}
        // ref={animation}
        style={styles.lottie}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("@assets/animations/event.json")}
        hardwareAccelerationAndroid
      />
    </View>
  );
};

export default Graphics;
