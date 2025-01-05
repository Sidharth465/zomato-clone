import { StyleSheet, Platform, Dimensions } from "react-native";
import { Colors } from "./Constants"; // Assuming you have a Constants file for your colors
import { RFValue } from "react-native-responsive-fontsize";

// Define the common shadowStyle
export const shadowStyle = {
  backgroundColor: Colors.background,
  shadowOffset: { width: 1, height: 16 },
  shadowOpacity: 0.4,
  elevation: 5,
  shadowRadius: 6,
  shadowColor: Colors.border,
};

// Restaurant Styles
export const restaurantStyles = StyleSheet.create({
  listContainer: {
    paddingBottom: 300,
  },
  shadowBottom: {
    shadowOffset: { width: 1, height: 18 },
    shadowOpacity: 0.08,
    elevation: 5,
    shadowRadius: 10,
    shadowColor: Colors.dark,
    backgroundColor: Colors.background,
  },
  card: {
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginBottom: 25,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    elevation: 5,
    shadowRadius: 10,
    shadowColor: Colors.dark,
    margin: 10,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    height: Dimensions.get("window").height * 0.3,
    resizeMode: "cover",
  },
  info: {
    padding: 10,
  },
  name: {
    marginBottom: 5,
  },
  details: {
    opacity: 0.7,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textPart: {
    width: "70%",
  },
  backToTopButton: {
    position: "absolute",
    alignSelf: "center",
    top: Dimensions.get("window").height * 0.055,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "black",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 999,
  },
});

// Restaurant Header Styles
export const restaurantHeaderStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 5,
    ...shadowStyle,
  },
  flexRowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexRowGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    opacity: 0.5,
  },
  sortingContainer: {
    paddingVertical: 2,
    zIndex: 2,
    ...shadowStyle,
  },
  mainPadding: {
    paddingHorizontal: 10,
  },
  scrollContainer: {
    backgroundColor: Colors.background,
    paddingBottom: 100,
  },
});

// Search Styles
export const searchStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    shadowOffset: { width: 1, height: -4 },
    shadowOpacity: 0.1,
    elevation: 5,
    shadowRadius: 5,
    bottom: Platform.OS === "android" ? 22 : 0,
    zIndex: 22,
    shadowColor: Colors.secondary,
  },
  searchInputContainer: {
    backgroundColor: "#F3F4F7",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 14,
    shadowColor: Colors.background,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    width: "72%",
    borderWidth: 0.6,
    borderColor: Colors.tertiary,
    paddingHorizontal: 10,
  },
  textContainer: {
    width: "80%",
    paddingLeft: 10,
    height: 48,
  },
  flexRowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 20,
  },
  padding: {
    padding: 10,
  },
  rollingText: {
    opacity: 0.6,
  },
  flexRowGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    height: 48,
  },
  offerContainer: {
    padding: 15,
    paddingBottom: Platform.OS === "ios" ? 25 : 15,
    paddingHorizontal: 20,
    overflow: "hidden",
  },
  offerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  offerText: {
    color: "#fff",
    fontSize: RFValue(12),
    fontFamily: "Okra-Bold",
    marginRight: 5,
    textAlign: "center",
  },
  offerSubtitle: {
    color: "#fff",
    fontSize: RFValue(10),
    fontFamily: "Okra-Medium",
    textAlign: "center",
    marginTop: 5,
  },
  animatedCount: {
    fontSize: RFValue(12),
    color: "white",
    fontFamily: "Okra-Bold",
    margin: 0,
  },
  confetti: {
    width: "100%",
    height: 400,
    position: "absolute",
  },
});
