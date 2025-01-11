import { StyleSheet, Platform, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BOTTOM_TAB_HEIGHT } from "./Constants";

export const tabStyles = StyleSheet.create({
  tabContainer: {
    width: Dimensions.get("window").width * 0.82,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    flex: 1,
    // borderWidth: 1,
  },
  tabBarContainer: {
    width: "100%",
    position: "absolute",
    height: BOTTOM_TAB_HEIGHT,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 5,
    shadowRadius: 11,
    shadowColor: "#000",
    bottom: 0,
    zIndex: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  verticalLine: {
    marginHorizontal: 10,
    height: "60%",
    width: 1,
    position: "absolute",
    left: "51%",
    borderRadius: 20,
    opacity: 0.2,
    backgroundColor: "#B3B3B3", // Using default color
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  focusedTabItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#F7CB46", // Customize color if needed
  },
  slidingIndicator: {
    position: "absolute",
    top: 0,
    height: 3,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: "15%",
    backgroundColor: "#F7CB46", // Assuming this is the desired color
  },
  blinkitLogoContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "12%",
    overflow: "hidden",
    backgroundColor: "#F7CB46",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  blinkitLogo: {
    width: "100%",
    height: 26,
    resizeMode: "contain",
  },
  tabLabel: {
    fontFamily: "Roboto", // Replace with actual font or default
    fontSize: RFValue(10),
    color: "#B3B3B3",
  },
  focusedTabLabel: {
    color: "#fff",
  },
});
