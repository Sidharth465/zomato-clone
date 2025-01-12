import Icon from "@components/global/Icon";
import React, { FC } from "react";
import { Image, Pressable, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { phoneStyles as styles } from "src/unistyles/phoneStyles";

const SocialLogin: FC = () => {
  return (
    <View style={styles.socialContainer}>
      <Pressable style={styles.iconContainer}>
        <Image
          style={styles.gimg}
          source={require("@assets/icons/google.png")}
        />
      </Pressable>
      <Pressable style={styles.iconContainer}>
        <Icon
          iconFamily="Ionicons"
          color="#222"
          name="logo-apple"
          size={RFValue(20)}
        />
      </Pressable>
      <Pressable style={styles.iconContainer}>
        <Icon
          iconFamily="Ionicons"
          color="#222"
          name="ellipsis-horizontal-sharp"
          size={RFValue(20)}
        />
      </Pressable>
    </View>
  );
};

export default SocialLogin;
