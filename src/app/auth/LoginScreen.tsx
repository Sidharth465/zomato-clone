import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Platform,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { loginStyles as styles } from "src/unistyles/authStyles";
import { StatusBar } from "expo-status-bar";

import CustomText from "@components/ui/CustomText";
import BreakerText from "@components/ui/BreakerText";
import PhoneInput from "@components/ui/PhoneInput";
import SocialLogin from "@components/ui/SocialLogin";
import useKeyboardOffsetHeight from "@utils/useKeyboardOffsetHeight";

const LoginScreen = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const keyboardOffsetHeight = useKeyboardOffsetHeight();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    // Simple validation

    if (phone) {
      setLoading(true);
      const token = "mocked-jwt-token";
      try {
        setTimeout(async () => {
          await AsyncStorage.setItem("userToken", token);

          router.replace("/home/delivery");
        }, 4000);
      } catch (error) {
        Alert.alert("Error", "Failed to save the token.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Invalid Credentials", "Please check your Phone Number.");
    }
  };

  useEffect(() => {
    if (keyboardOffsetHeight === 0) {
      Animated.timing(animatedValue, {
        toValue: 0,
        delay: 50,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -keyboardOffsetHeight * 0.25,
        delay: 50,
        useNativeDriver: true,
      }).start();
    }
  }, [keyboardOffsetHeight]);

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
        style={{ transform: [{ translateY: animatedValue }] }}
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
        <TouchableOpacity
          disabled={loading}
          activeOpacity={0.5}
          style={styles.buttonContainer}
          onPress={handleLogin}
        >
          {loading ? (
            <ActivityIndicator size={"large"} color={"#fff"} />
          ) : (
            <CustomText color="#fff" variant="h5" fontFamily="Okra-Medium">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>
        <BreakerText text="or" />
        <SocialLogin />
      </Animated.ScrollView>
      <View style={styles.footer}>
        <CustomText>By Continuing, you agree to our </CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms of Services</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policy</CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
