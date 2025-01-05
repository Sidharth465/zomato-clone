import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Constants"; // Assuming you have a Constants file for your colors

const device = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
};

export const cartStyles = StyleSheet.create({
  cartContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.background, // Using background color from Constants
    alignItems: "center",
    paddingVertical: 10,
  },
  expandedCartContainer: {
    justifyContent: "flex-end",
    paddingVertical: 10,
  },
  moreButton: {
    backgroundColor: Colors.background, // Using background color from Constants
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 2,
    zIndex: 100,
    position: "absolute",
    top: -15,
    borderColor: Colors.border, // Using border color from Constants
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    elevation: 5,
    shadowRadius: 5,
    shadowColor: Colors.lightText, // Using light text color from Constants
  },
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    marginBottom: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.border, // Using border color from Constants
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 5,
    shadowRadius: 1.5,
    shadowColor: Colors.lightText, // Using light text color from Constants
    backgroundColor: Colors.background, // Using background color from Constants
    width: "96%",
    alignSelf: "center",
  },
  flexRowGap: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  closeButton: {
    opacity: 0.6,
    marginHorizontal: 10,
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 2,
  },
  cartButton: {
    backgroundColor: Colors.active, // Using active color from Constants
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    resizeMode: "cover",
  },
  contentContainer: {
    width: device.width,
    height: device.height,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: -2,
    bottom: -40,
    position: "absolute",
  },
  closeIcon: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 200,
    padding: 5,
    marginBottom: 10,
  },
  absolute: {
    position: "absolute",
    width: device.width,
    height: device.height,
    zIndex: -2,
  },
  scrollContainer: {
    maxHeight: device.height * 0.7,
    backgroundColor: "#F4F6FC",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 5,
  },
  flexRowBetween: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
