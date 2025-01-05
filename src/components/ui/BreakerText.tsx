import { View, Text } from "react-native";
import React, { FC } from "react";
import { loginStyles as styles } from "src/unistyles/authStyles";
import CustomText from "./CustomText";

const BreakerText: FC<{ text: string }> = ({ text }) => {
  return (
    <View style={styles.breakerContainer}>
      <View style={styles.horizontalLine} />
      <CustomText
        fontSize={12}
        fontFamily="Okra-Medium"
        style={styles.breakerText}
      >
        {text}
      </CustomText>
      <View style={styles.horizontalLine} />
    </View>
  );
};

export default BreakerText;
