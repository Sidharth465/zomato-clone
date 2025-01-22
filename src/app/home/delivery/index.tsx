import Graphics from "@components/features/home/Graphics";
import Header from "@components/features/home/Header";
import MainList from "@components/list/MainList";
import { useSharedState } from "@library/context/SharedContext";
import React, { FC } from "react";
import { Platform, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { homeStyles as styles } from "src/unistyles/homeStyles";

const Delivery: FC = () => {
  const insets = useSafeAreaInsets();
  const { scrollYGlobal } = useSharedState();
  const backgroundColorChanges = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [1, 50], [0, 1]);

    return {
      backgroundColor: `rgba(255,255,255,${opacity})`,
    };
  });

  // for header
  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 50],
      [0, -50],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ translateY: translateY }],
    };
  });
  const moveUpStyleNotExtraPolate = useAnimatedStyle(() => {
    const translateY = interpolate(scrollYGlobal.value, [0, 50], [0, -50]);
    return {
      transform: [{ translateY: translateY }],
    };
  });

  return (
    <View
      style={[
        styles.container,
        { height: Platform.OS === "android" ? insets.top : 0 },
      ]}
    >
      <Animated.View style={[moveUpStyle]}>
        <Animated.View style={[moveUpStyleNotExtraPolate]}>
          <Graphics />
        </Animated.View>
        <Animated.View style={[backgroundColorChanges, styles.topHeader]}>
          <Header />
        </Animated.View>
      </Animated.View>
      <Animated.View style={[moveUpStyle]}>
        <MainList/>
      </Animated.View>


    </View>
  );
};

export default Delivery;
