import { View, Text, Image, FlatList, StyleSheet, Platform,Animated } from "react-native";
import React from "react";


import { recommendedListData } from "@utils/dummyData";
import { StatusBar } from "expo-status-bar";
// console.log("data",recommendedListData)


const spacing = 20;
const Avatar_size = 70;
const Item_size = Avatar_size + spacing*2



const TopAnimatedList = () => {

  const scrollY = React.useRef(new Animated.Value(0)).current;



  return (
    <View style={{flex:1,}}>
      <Image

        style={StyleSheet.absoluteFillObject}
        source={require("@assets/images/logo1.png")}
        borderRadius={80}

      />

      
      <Animated.FlatList  onScroll={Animated.event([{nativeEvent:{contentOffset:{y:scrollY}}}],{useNativeDriver:true})} contentContainerStyle={{
        padding:spacing,paddingBottom:80,paddingTop:Platform.OS !== "android" ? 42:0
      }} keyExtractor={(item)=>item?.id} style={{padding:10}}  data={recommendedListData}   renderItem={({item,index})=>{

       
const inputRange = [-1,0,Item_size*index,
  Item_size*(index+2)
]

const scale = scrollY.interpolate({
  inputRange,
  outputRange:[1,1,1,0],
extrapolate:"clamp"
})


        return(<Animated.View style={{flex:1,flexDirection:"row",alignItems:"center",padding:spacing/2,marginBottom:spacing,borderRadius:12,backgroundColor:"rgba(255,255,255,0.8)",shadowColor:"#000",shadowOffset:{height:10,width:0},shadowOpacity:0.3,shadowRadius:20,transform:[{scale}]}}>
          <Image
          style={{height:Avatar_size,width:Avatar_size,borderRadius:500,marginRight:spacing/2}}
          resizeMode="cover"
                  source={{uri:item?.imageUrl}}
                />
               <View style={{flex:1,flexDirection:"column"}}>
               <Text style={{fontSize:16,color:"#000",fontWeight:"bold"}}>{item?.name}</Text>
               <Text style={{fontSize:14,color:"#000"}}>{item?.time} for {item?.distance}</Text>
               </View>
            </Animated.View>)
      }}/>
    </View>
  );
};

export default TopAnimatedList;
