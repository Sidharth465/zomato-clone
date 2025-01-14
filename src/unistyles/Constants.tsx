import { Platform } from "react-native";

export const Colors = {
  primary: "#E23744",
  primary_light: "#EF4F5F",
  text: "#222",
  active_light: "#ECFAF1",
  secondary: "#2D2D2D",
  tertiary: "#F4F4F2",
  background: "#fff",
  background_light: "#F4F6FC",
  border: "#E5E9EF",
  lightText: "#9197A6",
  active: "#019A51",
  dark: "#18171C",
};

export const border = {
  sm: 8, // Small border radius
  md: 12, // Medium border radius
  lg: 16, // Large border radius
  xl: 20, // Extra large border radius
  full: 200, // Full (circular) border radius for completely round elements
};

export const Fonts = {
  Regular: "Okra-Regular",
  Medium: "Okra-Medium",
  Light: "Okra-MediumLight",
  SemiBold: "Okra-Bold",
  Bold: "Okra-ExtraBold",
};
// Define the bottom tab height as a constant
export const BOTTOM_TAB_HEIGHT = Platform.OS == "android" ? 60:100; // Adjust this value as per your design needs
