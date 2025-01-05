import { View, Text, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import SplashScreen from "../auth/SplashScreen";

const Root = () => {
  return (
    <>
      <SplashScreen />
      <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.clear(), router.replace("/auth/LoginScreen");
        }}
      />
    </>
  );
};

export default Root;
