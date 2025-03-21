import Graphics from "@components/features/home/Graphics";
import Header from "@components/features/home/Header";
import Filler5 from "@components/global/FillerAnimation";
import MainList from "@components/list/MainList";
import { useSharedState } from "@library/context/SharedContext";
import localStorage from "@utils/localStorage";
import { useFocusEffect } from "expo-router";
import React, { FC, useEffect, useRef } from "react";
import { Platform, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { homeStyles as styles } from "src/unistyles/homeStyles";

const Delivery: FC = () => {
  const insets = useSafeAreaInsets();
  const { scrollYGlobal } = useSharedState();
  const searchHeaderRef = useRef<{ focus: () => void } | null>(null);
  const  [fillerVisible,setFillerVisible] = React.useState<boolean>(false);
  const handleInputFocus = () => {
    searchHeaderRef.current?.focus();
  };
  const backgroundColorChanges = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGlobal.value, [1, 50], [0, 1]);
    
  

    return {
      backgroundColor: `rgba(255,255,255,${opacity})`,
    };
  });

  // for header
  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGlobal.value,
      [0, 50],
      [0, -50],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ translateY: translateY }],
    };
  });
  const moveUpStyleNotExtraPolate = useAnimatedStyle(() => {
    const translateY = interpolate(scrollYGlobal.value, [0, 50], [0, -50]);
    return {
      transform: [{ translateY: translateY }],
    };
  });
console.log("fillerVisible",fillerVisible)
  async function checkIfFirstTime(){
    let exposed = await localStorage.getItem("isFirstExpDone");
    console.log('exposed',exposed)
    if(exposed){
      setFillerVisible(false);
    }else{
      setFillerVisible(true);
    }
  }

  useEffect(()=>{
    checkIfFirstTime()
    
  },[])


  return (
    <View
      style={[
        styles.container,
        { height: Platform.OS === "android" ? insets.top : 0, zIndex: 100 },
      ]}
    >
      <Animated.View style={[moveUpStyle]}>
        <Animated.View style={[moveUpStyleNotExtraPolate]}>
          <Graphics />
        </Animated.View>
        <Animated.View style={[backgroundColorChanges, styles.topHeader]}>
          <Header ref = {searchHeaderRef}/>

        </Animated.View>
      </Animated.View>

      <Animated.View style={[moveUpStyle]}>
        <MainList />

      </Animated.View>
     {fillerVisible&&
      <View
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999999,
      }}
    >
      <Filler5 handleInputFocus={handleInputFocus} fillerVisible={fillerVisible} navigation={navigator} setFillerVisible={setFillerVisible}/>
    </View>
     }


    </View>
  );
};

export default Delivery;
