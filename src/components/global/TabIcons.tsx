import { View, Text, StyleSheet, Image } from "react-native";
import React, { FC, memo } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "src/unistyles/Constants";
import CustomText from "@components/ui/CustomText";
import {
  delivery,
  delivery_focused,
  dining,
  dining_focused,
  live,
  live_focused,
  reorder,
  reorder_focused,
} from "@assets/tabicons";
import { useAppSelector } from "@hooks/index";

interface TabProps {
  name: "Delivery" | "Dining" | "Reorder" | "Live";
}
interface IconProp {
  focused: boolean;
}

const TabIcon: FC<TabProps> = memo(({ name }) => {
  return (
    <View style={styles.tabStles}>
      <Image
        source={
          name === "Delivery"
            ? delivery
            : name == "Dining"
              ? dining
              : name == "Reorder"
                ? reorder
                : live
        }
        style={[styles.styles]}
      />
      <CustomText style={styles.textStleInActive}>{name}</CustomText>
    </View>
  );
});

const TabIconFocused: FC<TabProps> = memo(({ name }) => {
  const { isVegMode } = useAppSelector((state) => state.userSlice);
  return (
    <View style={styles.tabStles}>
      <Image
        source={
          name === "Delivery"
            ? delivery_focused
            : name == "Dining"
              ? dining_focused
              : name == "Reorder"
                ? reorder_focused
                : live_focused
        }
        style={[
          styles.styles,
          {
            tintColor:
              name == "Live"
                ? undefined
                : isVegMode
                  ? Colors.active
                  : Colors.primary,
          },
        ]}
      />
      <CustomText
        style={[
          styles.textStleActive,
          {
            color:
              name == "Live"
                ? Colors.active
                : isVegMode
                  ? Colors.active
                  : Colors.primary,
          },
        ]}
      >
        {name}
      </CustomText>
    </View>
  );
});

const styles = StyleSheet.create({
  styles: {
    width: RFValue(18),
    height: RFValue(18),
  },

  tabStles: {
    justifyContent: "center",
    alignItems: "center",
  },

  textStleInActive: {
    textAlign: "center",
    marginTop: 4,
    color: Colors.lightText,
    fontSize: RFValue(9.5),
  },
  textStleActive: {
    textAlign: "center",
    marginTop: 4,
    color: Colors.active,
    fontSize: RFValue(9.5),
  },
});

export const DeliveryTabIcon: FC<IconProp> = ({ focused }) => {
  return focused ? (
    <TabIconFocused name="Delivery" />
  ) : (
    <TabIcon name="Delivery" />
  );
};

export const ReorderTabIcon: FC<IconProp> = ({ focused }) => {
  return focused ? (
    <TabIconFocused name="Reorder" />
  ) : (
    <TabIcon name="Reorder" />
  );
};
export const DiningTabIcon: FC<IconProp> = ({ focused }) => {
  return focused ? <TabIconFocused name="Dining" /> : <TabIcon name="Dining" />;
};
export const LiveTabIcon: FC<IconProp> = ({ focused }) => {
  return focused ? <TabIconFocused name="Live" /> : <TabIcon name="Live" />;
};
