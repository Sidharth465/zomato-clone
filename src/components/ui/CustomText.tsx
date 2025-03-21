import { View, Text, TextStyle, PlatformOSType, Platform } from "react-native";
import React, { FC, ReactNode } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors, Fonts } from "src/unistyles/Constants";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
type PlatformType = "android" | "ios";

interface CustomTextProps {
  variant?: Variant;
  fontFamily?:
    | "Okra-Bold"
    | "Okra-Regular"
    | "Okra-Light"
    | "Okra-Black"
    | "Okra-Medium";
  fontSize?: number;
  color?: string;
  style?: TextStyle | TextStyle[];
  children?: ReactNode;
  numberOfLine?: number;
  onLayout?: (even: any) => void;
}

const fontSizeMap: Record<Variant, Record<PlatformType, number>> = {
  h1: { android: 24, ios: 22 },
  h2: { android: 22, ios: 20 },
  h3: { android: 20, ios: 18 },
  h4: { android: 18, ios: 16 },
  h5: { android: 16, ios: 14 },
  h6: { android: 14, ios: 12 },
  h7: { android: 12, ios: 10 },
};

const CustomText: FC<CustomTextProps> = ({
  color,
  variant,
  children,
  fontFamily,
  fontSize,
  numberOfLine,
  onLayout,
  style,
  ...props
}) => {
  let computedFontSize: number =
    Platform.OS == "android"
      ? RFValue(fontSize || 12)
      : RFValue(fontSize || 10);
  if (variant && fontSizeMap[variant]) {
    const defaultSize = fontSizeMap[variant][Platform.OS as PlatformType];
    computedFontSize = RFValue(fontSize || defaultSize);
  }

  const fontFamilyStyle = {
    fontFamily,
  };
  return (
    <Text
      onLayout={onLayout}
      style={[
        {
          textAlign: "left",
          color: color || Colors.text,
          fontSize: computedFontSize,
        },
        fontFamilyStyle,
        style,
      ]}
      numberOfLines={numberOfLine !== undefined ? numberOfLine : undefined}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CustomText;
