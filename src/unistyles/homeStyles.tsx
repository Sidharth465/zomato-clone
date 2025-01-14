import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet, Dimensions, Platform } from "react-native";
import { Colors } from "./Constants"; // Assuming Constants contains your colors and other values

const device = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
};

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  topHidingContainer: {
    marginTop: 10,
    backgroundColor: Colors.background,
  },
  topHeader: {
    zIndex: 1,
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  animatedText: {
    fontSize: RFValue(10.5),
    fontFamily: "Okra-Bold",
    color: "#fff",
  },
  animatedSubText: {
    fontSize: RFValue(7),
    lineHeight: 9,
    fontFamily: "Okra-Bold",
  },
  exploreContainer: {
    marginVertical: 10,
  },
  lottieContainer: {
    width: device.width,
    backgroundColor: "#CC152D",
    height:
      Platform.OS === "android" ? device.height * 0.54 : device.height * 0.6,
    justifyContent: "flex-end",
    position: "absolute",
    zIndex: -3,
    alignSelf: "center",
  },
  lottie: {
    width: "100%",
    bottom: -1,
    height: device.width,
  },
  rollingText: {
    opacity: 0.6,
  },
  flexRowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  flexRowGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  translation: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 8, // Adjusted for consistency with StyleSheet
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  translationIcon: {
    resizeMode: "contain",
    width: 32,
    height: 32,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50, // Full radius for a circle
    resizeMode: "contain",
  },
  goldenCircle: {
    width: 50,
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
    height: 50,
    borderRadius: 50, // Full circle
  },
  profileAvatar: {
    width: 40,
    marginHorizontal: 5,
    height: 40,
    borderRadius: 50, // Full radius for a circle
    justifyContent: "center",
    alignItems: "center",
  },

  vegMode: {
    width: "15%",
    top: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  switch: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    bottom: 2,
  },
  searchInputContainer: {
    backgroundColor: "#F3F4F7",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    elevation: 5,
    shadowRadius: 6,
    shadowColor: Colors.background,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    width: "88%",
    borderWidth: 0.6,
    borderColor: Colors.tertiary,
    paddingHorizontal: 10,
  },
  textContainer: {
    width: "80%",
    paddingLeft: 10,
    height: 48,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
  },
  padding: {
    padding: 10,
  },
  flexRowCenter: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  activeLeftTab: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.tertiary,
    borderWidth: 1,
    borderColor: Colors.active,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  inActiveLeftTab: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  activeRightTab: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: Colors.tertiary,
    borderWidth: 1,
    borderColor: Colors.active,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  inActiveRightTab: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
