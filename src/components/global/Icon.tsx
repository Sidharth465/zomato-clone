import { View, Text } from "react-native";
import React, { FC } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface IconProps {
  color?: string;
  size: number;
  name: string;
  iconFamily: "Ionicons" | "MaterialIcons" | "MaterialCommunityIcons";
}

const Icon: FC<IconProps> = ({ iconFamily, name, size, color }) => {
  return (
    <>
      {iconFamily === "Ionicons" && (
        <Ionicons name={name} size={size} color={color} />
      )}
      {iconFamily === "MaterialCommunityIcons" && (
        <MaterialIcons name={name} size={size} color={color} />
      )}
      {iconFamily === "MaterialCommunityIcons" && (
        <Ionicons name={name} size={size} color={color} />
      )}
    </>
  );
};

export default Icon;
