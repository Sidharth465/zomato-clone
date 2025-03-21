import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
  Pressable,
} from "react-native";
import React from "react";
import { useAppSelector } from "@hooks/index";
import { useSharedState } from "@library/context/SharedContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tabStyles as styles } from "src/unistyles/tabStyles";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "src/unistyles/Constants";
import ScalePress from "./ScalePress";
import {
  DeliveryTabIcon,
  DiningTabIcon,
  LiveTabIcon,
  ReorderTabIcon,
} from "./TabIcons";

const AnimatedTabBar = ({ state, descriptors, navigation }: any) => {
  const isVegMode = useAppSelector((state) => state.userSlice.isVegMode);
  const { scrollY } = useSharedState();
  const bottom = useSafeAreaInsets();
  const screenWidth = Dimensions.get("screen").width;

  // Sort routes based on folder structure order
  // const sortedRoutes = React.useMemo(() => {
  //   const order = [...state?.routeNames]?.reverse();
  //   return [...state.routes].sort(
  //     (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
  //   );
  // }, [state.routes]);
  // const sortedIndex = React.useMemo(
  //   () =>
  //     sortedRoutes.findIndex(
  //       (route) => route.name === state.routes[state.index]?.name
  //     ),
  //   [sortedRoutes, state?.routes, state?.index]
  // );

  const isLiveTabFocused = state?.routes[state.index]?.name === "live/index";

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
            scrollY.value === 1
              ? withTiming(100, { duration: 100 })
              : withTiming(0, { duration: 300 }),
        },
      ],
    };
  });

  const indicatorAnimateStyle = useAnimatedStyle(() => {
    const baseLeft = 10;
    let slideValue = state.index == 3 ? 0.226 :0.23;

    return {
      left: withTiming(baseLeft +  state?.index* screenWidth * slideValue),
    };
  });

  return (
    <>
      <Animated.View
        style={[
          styles.tabBarContainer,
          animatedStyle,
          {
            paddingBottom: bottom.bottom,
            backgroundColor: isLiveTabFocused ? Colors.dark : Colors.background,
            justifyContent: "center",

            
          },
        ]}
      >
        <View style={styles.tabContainer}>
          {state?.routes?.map((route: any, index: number) => {
            const isFocused = index === state.index;



            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({ type: "tabLongPress", target: route.key });
            };

            return (
              <ScalePress
                onPress={onPress}
                onLongPress={onLongPress}
                key={index}
                style={[styles.tabItem, isFocused ? styles.focusedTabItem : {}]}
              >
                {route.name === "delivery" && (
                  <DeliveryTabIcon focused={isFocused} />
                )}
                {route.name === "dining/index" && (
                  <DiningTabIcon focused={isFocused} />
                )}

                {route.name === "reorder/index" && (
                  <ReorderTabIcon focused={isFocused} />
                )}
                {route.name === "live/index" && (
                  <LiveTabIcon focused={isFocused} />
                )}
              </ScalePress>
            );
          })}
          <View style={styles.verticalLine} />
        </View>

        <Animated.View
          style={[
            styles.slidingIndicator,
            indicatorAnimateStyle,
            {
              backgroundColor: isLiveTabFocused
                ? "#fff"
                : isVegMode
                  ? Colors.active
                  : Colors.primary,
            },
          ]}
        />

        <Pressable
          onPress={() =>
            Linking.openURL(
              "https://play.google.com/store/apps/dev?id=7650048150730203407&hl=en-US&pli=1"
            )
          }
          style={styles.blinkitLogoContainer}
        >
          <Image
            style={styles.blinkitLogo}
            source={require("@assets/icons/blinkit.png")}
          />
        </Pressable>
      </Animated.View>
    </>
  );
};

export default AnimatedTabBar;
