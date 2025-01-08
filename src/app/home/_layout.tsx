import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { SharedStateProvider } from "@library/context/SharedContext";
import AnimatedTabBar from "@components/global/AnimatedTabs";
import { Provider } from "react-redux";
import { store } from "@library/redux/store";
("@components/global/AnimatedTabs");

const HomeLayout = () => {
  return (
    <SharedStateProvider>
      <Provider store={store}>
        <Tabs
          tabBar={(props) => <AnimatedTabBar {...props} />}
          initialRouteName="delivery/index"
          screenOptions={{ headerShown: false, animation: "shift" }}
        >
          {/* <Tabs.Screen
          name="delivery/index"
          options={{ tabBarLabel: "Delivery" }}
        />
        <Tabs.Screen name="dining/index" options={{ tabBarLabel: "Dining" }} />
        <Tabs.Screen
          name="reorder/index"
          options={{ tabBarLabel: "Reorder" }}
        />
        <Tabs.Screen name="live/index" options={{ tabBarLabel: "Live" }} /> */}
        </Tabs>
      </Provider>
    </SharedStateProvider>
  );
};

export default HomeLayout;
