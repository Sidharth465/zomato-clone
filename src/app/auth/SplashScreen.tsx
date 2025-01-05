import CustomText from "@components/ui/CustomText";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Platform, useWindowDimensions, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { splashStyles as styles } from "src/unistyles/authStyles";

const SplashScreen = () => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS != "android"} />
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require("@assets/images/logo_t.png")}
      />

      <Animated.View
        style={styles.animatedContainer}
        entering={FadeInDown.delay(400).duration(800)}
      >
        <Image
          style={styles.treeImage}
          resizeMode="contain"
          source={require("@assets/images/tree.png")}
        />

        <CustomText
          color="#ffff"
          variant="h5"
          fontFamily="Okra-Medium"
          style={styles.msgText}
        >
          Carbon and Plastic free Neutral Deliveries in India
        </CustomText>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
