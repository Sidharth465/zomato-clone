import {
  View,
  Text,
  ViewStyle,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { FC, ReactNode } from "react";
import { transform } from "@babel/core";

interface ScalePressProps {
  onPress: () => void;
  onLongPress: () => void;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const ScalePress: FC<ScalePressProps> = ({
  onLongPress,
  onPress,
  children,
  style,
}) => {
  const scaleValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={1}
      style={{ ...style, flex: 1, marginHorizontal: 5 }}
    >
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ScalePress;
