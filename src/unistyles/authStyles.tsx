import { StyleSheet, Dimensions } from "react-native";
import { Colors, border } from "./Constants"; // Assuming you have a Constants file

const device = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
};

export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary, // Use the primary color from your Colors constant
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: device.width * 0.6,
    height: device.height * 0.4,
    resizeMode: "contain",
    marginTop: 80,
  },
  treeImage: {
    width: device.width * 0.6,
    height: device.height * 0.18,
    resizeMode: "contain",
  },
  msgText: {
    textAlign: "center",
  },
  animatedContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
});

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background, // Use the background color from your Colors constant
  },
  cover: {
    width: "100%",
    height: device.height * 0.4,
    resizeMode: "cover",
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 60,
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    textAlign: "center",
    marginHorizontal: 20,
  },
  breakerContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    overflow: "hidden",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  horizontalLine: {
    height: 1,
    width: "100%",
    position: "absolute",
    backgroundColor: Colors.border, // Use border color from your Colors constant
    zIndex: -1,
  },
  breakerText: {
    opacity: 0.8,
    backgroundColor: Colors.background, // Use background color from your Colors constant
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: Colors.primary, // Use primary color from your Colors constant
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 45,
    marginVertical: 5,
    borderRadius: border.md, // Assuming border is defined in your Constants
  },
  footer: {
    position: "absolute",
    bottom: 26,
    alignSelf: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footerTextContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 5,
  },
  footerText: {
    textDecorationLine: "underline",
    fontSize: 10,
  },
});
