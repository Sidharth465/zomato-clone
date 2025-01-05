import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ animation: "fade", headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="SplashScreen" />
    </Stack>
  );
};

export default AuthLayout;
