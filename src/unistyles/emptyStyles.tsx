import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Constants"; // Assuming you have a Constants file for your colors

const device = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
};

export const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background, // Using background color from Constants
  },
  live_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Custom color
  },
  emptyImage: {
    width: device.width * 0.9,
    height: device.height * 0.4,
    resizeMode: "contain",
  },
});
