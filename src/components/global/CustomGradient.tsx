import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const darkColor = ["rgba(0,0,0,0.9)","rgba(0,0,0,0.6)","rgba(0,0,0,0.1)","rgba(0,0,0,0)"]
const lightColor = ["rgba(255,255,255,1)","rgba(255,255,255,0.9)","rgba(255,255,255,0.1)"]


interface CustomGradientProps{
    position :"top"|"bottom";
    mode? : "dark"|"light";
    style?:ViewStyle
}

const CustomGradient = ({ position="top",mode="dark",style}:CustomGradientProps) => {

    const bottomColors =[...(mode === "dark"?darkColor:lightColor)].reverse();
    const gradientStyle:ViewStyle ={
        position:"absolute",
        width:"100%",
        height:60,
        top:position=="top"?0:undefined,
        bottom:position=="bottom"?0:undefined,
        zIndex:1

    }
  return (
      <LinearGradient colors={position == "top" ? lightColor:bottomColors} style={[gradientStyle,style]}/>



  )
}

export default CustomGradient