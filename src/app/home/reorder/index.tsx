import TopAnimatedList from "@components/list/TopAnimatedList";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { emptyStyles } from "src/unistyles/emptyStyles";
import { homeStyles  as style} from "src/unistyles/homeStyles";
// console.log("data",recommendedListData)



const ReOrder = () => {

  return (
  
    <View   style={[style.container]}>
      <Image
style={emptyStyles.emptyImage}
        source={require("@assets/images/coming_soon3.png")}
     
      />
<TopAnimatedList />

    </View>
  );
};

export default ReOrder;
