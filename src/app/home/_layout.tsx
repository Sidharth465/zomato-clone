import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

const HomeLayout = () => {
  return (
    <Tabs
      initialRouteName="delivery/index"
      screenOptions={{ headerShown: false, animation: "shift" }}
    >
      <Tabs.Screen
        name="delivery/index"
        options={{ tabBarLabel: "Delivery" }}
      />
      <Tabs.Screen name="dining/index" options={{ tabBarLabel: "Dining" }} />
      <Tabs.Screen name="reorder/index" options={{ tabBarLabel: "Reorder" }} />
      <Tabs.Screen name="live/index" options={{ tabBarLabel: "Live" }} />
    </Tabs>
  );
};

export default HomeLayout;
