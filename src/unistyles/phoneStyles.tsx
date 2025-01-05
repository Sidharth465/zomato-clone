import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./Constants"; // Assuming you have a Constants file for your colors

// Define shadowStyle to be reused in different components
export const shadowStyle = {
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.4,
  elevation: 5,
  shadowRadius: 4,
  shadowColor: Colors.lightText,
  borderColor: Colors.border,
  borderRadius: 10,
};

export const phoneStyles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  countryPickerContainer: {
    backgroundColor: "#fff",
    ...shadowStyle,
    padding: 8,
    height: 45,
    flexDirection: "row",
    gap: 5,
    width: "18%",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneInputContainer: {
    backgroundColor: "#fff",
    width: "78%",
    ...shadowStyle,
    paddingHorizontal: 8,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    height: 45,
  },
  input: {
    height: 45,
    fontFamily: "Medium", // Use the appropriate font from your project
    flex: 1,
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 60,
    marginTop: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    ...shadowStyle,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  gimg: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
