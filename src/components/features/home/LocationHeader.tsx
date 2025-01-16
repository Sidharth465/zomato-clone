import Icon from "@components/global/Icon";
import CustomText from "@components/ui/CustomText";
import { useSharedState } from "@library/context/SharedContext";
import React, { FC } from "react";
import { Image, Pressable, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeStyles as styles } from "src/unistyles/homeStyles";

const LocationHeader: FC = () => {
  const { scrollYGlobal } = useSharedState();
  const textColor = "#fff";
  const opacityFadingStyle = useAnimatedStyle(() => {
    // note [0,80]  where 0 is value of opacity and 80 is value of scrollYGlobal
    const opacity = interpolate(scrollYGlobal.value, [0, 80], [1, 0]);

    return {
      opacity: opacity,
    };
  });

  return (
    <Animated.View style={[opacityFadingStyle]}>
      <SafeAreaView />
      <View style={styles.flexRowBetween}>
        <View style={styles.flexRowGap}>
          <Icon
            name="map-marker"
            color={textColor}
            iconFamily="MaterialCommunityIcons"
            size={32}
          />

          <View>
            <Pressable style={styles.flexRow}>
              <CustomText
                variant="h5"
                fontFamily="Okra-Medium"
                color={textColor}
              >
                Delhi, India
              </CustomText>
              <Icon
                name="chevron-down"
                color={textColor}
                iconFamily="MaterialCommunityIcons"
                size={25}
              />
            </Pressable>
            <CustomText fontFamily="Okra-Medium" color={textColor}>
              Delhi, India
            </CustomText>
          </View>
        </View>

        <View style={styles.flexRowGap}>
          <Pressable style={styles.translation}>
            <Image
              style={styles.translationIcon}
              source={require("@assets/icons/translation.png")}
            />
          </Pressable>
          <Pressable style={styles.profileAvatar}>
            <Image
              style={styles.goldenCircle}
              source={require("@assets/icons/golden_circle.png")}
            />

            <Image
              style={styles.profileImage}
              source={require("@assets/images/user.jpg")}
            />
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
};

export default LocationHeader;
