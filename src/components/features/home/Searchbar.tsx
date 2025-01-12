import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeStyles } from "src/unistyles/homeStyles";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { useSharedState } from "@library/context/SharedContext";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Icon from "@components/global/Icon";
import { Colors } from "src/unistyles/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import RollingContent from "react-native-rolling-bar";
import CustomText from "@components/ui/CustomText";
import { setReduxVegMode } from "@library/redux/slices/userSlice";

const searchItem: string[] = [
  'Search "chai samosa"',
  'Search "biryani"',
  'Search "paneer tikka"',
  'Search "gulab jamun"',
  'Search "butter chicken"',
  'Search "masala dosa"',
  'Search "veg thali"',
  'Search "pav bhaji"',
  'Search "chicken tikka masala"',
  'Search "rajma chawal"',
  'Search "matar paneer"',
  'Search "chhole bhature"',
  'Search "lassi"',
  'Search "idli sambhar"',
  'Search "dal makhani"',
  'Search "tandoori chicken"',
  'Search "kebabs"',
  'Search "jalebi"',
  'Search "pulao"',
  'Search "fish curry"',
];

const Searchbar = () => {
  const dispatch = useAppDispatch();
  const { isVegMode } = useAppSelector((state) => state.userSlice);
  const { scrollYGlobal } = useSharedState();

  const textColorANimation = useAnimatedStyle(() => {
    const textColor = interpolate(scrollYGlobal.value, [0, 80], [255, 0]);
    return {
      color: `rgb(${textColor},${textColor},${textColor})`,
    };
  });
  return (
    <>
      <SafeAreaView>
        <View style={[homeStyles.flexRowBetween, homeStyles.padding]}>
          <Pressable style={homeStyles.searchInputContainer}>
            <Icon
              name="search"
              color={isVegMode ? Colors.active : Colors.primary}
              size={20}
              iconFamily="Ionicons"
            />
            <RollingContent
              //   animationDuration={300}
              interval={3000}
              defaultStyle={false}
              customStyle={homeStyles.textContainer}
              forceRoll
            >
              {searchItem?.map((item, index) => {
                return (
                  <CustomText
                    key={index}
                    fontFamily="Okra-Medium"
                    fontSize={12}
                    style={homeStyles.rollingText}
                  >
                    {item}
                  </CustomText>
                );
              })}
            </RollingContent>
            <Icon
              name="search"
              color={isVegMode ? Colors.active : Colors.primary}
              size={20}
              iconFamily="Ionicons"
            />
          </Pressable>
          <Pressable
            style={homeStyles.vegMode}
            onPress={() => dispatch(setReduxVegMode(!isVegMode))}
          >
            <Animated.Text
              style={[textColorANimation, homeStyles.animatedText]}
            >
              VEG
            </Animated.Text>
            <Animated.Text
              style={[textColorANimation, homeStyles.animatedText]}
            >
              MODE
            </Animated.Text>
            <Image
              style={homeStyles.switch}
              source={
                isVegMode
                  ? require("@assets/icons/switch_on.png")
                  : require("@assets/icons/switch_off.png")
              }
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Searchbar;
