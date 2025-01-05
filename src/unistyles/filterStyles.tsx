import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Constants"; // Assuming you have a Constants file for your colors

const device = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
};

export const filterStyles = StyleSheet.create({
  filterBar: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    padding: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 5,
    borderRadius: 8,
    shadowRadius: 1.5,
    shadowColor: Colors.lightText, // Using lightText color from Constants
    borderColor: Colors.border, // Using border color from Constants
    backgroundColor: Colors.background, // Using background color from Constants
    borderWidth: 1,
    marginRight: 10,
  },
});
