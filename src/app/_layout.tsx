import { useFonts } from "expo-font";
import { SplashScreen as ExpoSplashScreen, router, Stack } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Alert } from "react-native";
import SplashScreen from "./auth/SplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EntryLayout = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    "Okra-Bold": require("@assets/fonts/Okra-Bold.ttf"),
    "Okra-ExtraBold": require("@assets/fonts/Okra-ExtraBold.ttf"),
    "Okra-Medium": require("@assets/fonts/Okra-Medium.ttf"),
    "Okra-MediumLight": require("@assets/fonts/Okra-MediumLight.ttf"),
    "Okra-Regular": require("@assets/fonts/Okra-Regular.ttf"),
  });

  // Hide the splash screen when the app is ready
  useEffect(() => {
    const prepareApp = async () => {
      if (fontsLoaded) {
        await ExpoSplashScreen.hideAsync();
        setAppIsReady(true);
      }
    };

    prepareApp();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return <SplashScreen />;
  }

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="auth" />
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default EntryLayout;
