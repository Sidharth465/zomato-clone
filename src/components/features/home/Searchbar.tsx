import Icon from "@components/global/Icon";
import AnimatedSwitch from "@components/ui/AnimatedSwitch";
import CustomText from "@components/ui/CustomText";
import { useAppDispatch, useAppSelector } from "@hooks/index";
import { useSharedState } from "@library/context/SharedContext";
import { setReduxVegMode } from "@library/redux/slices/userSlice";
import React, { forwardRef } from "react";
import { Pressable, TextInput, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import RollingContent from "react-native-rolling-bar";
import { Colors } from "src/unistyles/Constants";
import { homeStyles } from "src/unistyles/homeStyles";

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

const Searchbar = ( props:any,ref:any) => {
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

        <View  style={[homeStyles.flexRowBetween, homeStyles.padding]}>
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
              <TextInput  ref={ref} placeholderTextColor="#9E9E9E"   />

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
              name="mic"
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
            <AnimatedSwitch />
          </Pressable>
        </View>

    </>
  );
};

export default forwardRef(Searchbar);
