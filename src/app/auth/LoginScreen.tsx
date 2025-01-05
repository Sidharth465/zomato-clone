import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Platform,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { loginStyles as styles } from "src/unistyles/authStyles";
import { StatusBar } from "expo-status-bar";
import Animated from "react-native-reanimated";
import CustomText from "@components/ui/CustomText";
import BreakerText from "@components/ui/BreakerText";
import PhoneInput from "@components/ui/PhoneInput";

const LoginScreen = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Simple validation
    if (phone && password) {
      const token = "mocked-jwt-token";
      try {
        await AsyncStorage.setItem("userToken", token);
        Alert.alert(`Success", "You are logged in! token ${token}`);

        router.replace("/home");
      } catch (error) {
        Alert.alert("Error", "Failed to save the token.");
        console.error(error);
      }
    } else {
      Alert.alert(
        "Invalid Credentials",
        "Please check your username and password."
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== "android"} />
      <Image
        borderBottomLeftRadius={styles.cover.borderBottomEndRadius}
        borderBottomRightRadius={styles.cover.borderBottomEndRadius}
        style={styles.cover}
        source={require("@assets/images/login.png")}
      />
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode={"on-drag"}
        contentContainerStyle={styles.bottomContainer}
      >
        <CustomText fontFamily="Okra-Bold" style={styles.title} variant="h2">
          India's #1 Food Delivery And Dining App
        </CustomText>
        <BreakerText text="Log in or Sign up" />
        <PhoneInput value={phone} onChangeText={(e) => setPhone(e)} />
      </Animated.ScrollView>
    </View>
  );
};

export default LoginScreen;
