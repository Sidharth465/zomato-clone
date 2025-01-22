import { View, Text, Pressable, TextInput } from "react-native";
import React, { FC } from "react";
import { phoneStyles as style } from "src/unistyles/phoneStyles";
import CustomText from "./CustomText";
import { Colors } from "src/unistyles/Constants";
import Icon from "@components/global/Icon";

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const PhoneInput: FC<PhoneInputProps> = ({
  onChangeText,
  value,
  onBlur,
  onFocus,
}) => {
  return (
    <View style={style.container}>
      <Pressable style={style.countryPickerContainer}>
        <CustomText variant="h2">🇮🇳</CustomText>
        <Icon
          iconFamily="Ionicons"
          name="caret-down-sharp"
          color={Colors.lightText}
          size={18}
        />
      </Pressable>
      <View style={style.phoneInputContainer}>
        <CustomText fontFamily="Okra-Bold">+91</CustomText>
        <TextInput
          style={style.input}
          placeholderTextColor={Colors.lightText}
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </View>
    </View>
  );
};

export default PhoneInput;
