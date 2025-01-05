import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import { phoneStyles as styles } from "src/unistyles/phoneStyles";
import Icon from "@components/global/Icon";
import { RFValue } from "react-native-responsive-fontsize";

const SocialLogin: FC = () => {
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image
          style={styles.gimg}
          source={require("@assets/icons/google.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          iconFamily="Ionicons"
          color="#222"
          name="logo-apple"
          size={RFValue(20)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          iconFamily="Ionicons"
          color="#222"
          name="ellipsis-horizontal-sharp"
          size={RFValue(20)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;
