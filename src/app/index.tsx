import {
  View,
  Text,
  BackHandler,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import SplashScreen from "./auth/SplashScreen"; // Assuming this is your splash screen component
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Added for error handling
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        setLoading(true);
        setError(null);
        const storedToken = await AsyncStorage.getItem("userToken");
        setToken(storedToken);
      } catch (error) {
        setError("Failed to retrieve the token. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        { text: "Cancel", onPress: () => null, style: "cancel" },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (!isLoading && token !== null) {
      router.replace("/home");
    } else if (!isLoading && token === null) {
      router.replace("/auth");
    }
  }, [isLoading, token, router]);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red", fontSize: 18, marginBottom: 20 }}>
          {error}
        </Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return null; // No need for a return in this section anymore, navigation is handled in useEffect
};

export default App;
