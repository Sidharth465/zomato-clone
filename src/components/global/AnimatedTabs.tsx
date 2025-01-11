import { View, Dimensions } from "react-native";
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
  const sortedRoutes = React.useMemo(() => {
    const order = [...state?.routeNames]?.reverse();
    return [...state.routes].sort(
      (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
    );
  }, [state.routes]);
  const sortedIndex = React.useMemo(
    () =>
      sortedRoutes.findIndex(
        (route) => route.name === state.routes[state.index]?.name
      ),
    [sortedRoutes, state.routes, state.index]
  );

  const isLiveTabFocused = state.routes[state.index]?.name === "live/index";

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
    const baseLeft = 30;
    let slideValue = 0.24;

    return {
      left: withTiming(baseLeft + sortedIndex * screenWidth * slideValue),
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
          {sortedRoutes.map((route: any, index: number) => {
            const isFocused = index === sortedIndex;

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
                {route.name === "delivery/index" && (
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
        ></Animated.View>
      </Animated.View>
    </>
  );
};

export default AnimatedTabBar;
