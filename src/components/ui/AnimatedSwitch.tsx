import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { setReduxVegMode } from '@library/redux/slices/userSlice';
import { Colors } from 'src/unistyles/Constants';

const AnimatedSwitch = ({onPress=()=>undefined}) => {
const dispatch =useAppDispatch()
const { isVegMode } = useAppSelector((state) => state.userSlice);

const translateX = useSharedValue(0)

const animatedStyle  = useAnimatedStyle(()=>{

    return{
        transform:[{translateX:withTiming(isVegMode ? translateX.value+18:0,{duration:300})}],

    }
})

const bgAnimate = useAnimatedStyle(()=>  {
    return{
backgroundColor: withTiming(isVegMode ? Colors.active:Colors.background_light, {duration:300})
    }
})




     


  return (
    <Pressable   onPress={() => dispatch(setReduxVegMode(!isVegMode))} >
        <Animated.View style={[styles.container,bgAnimate]}>

            <Animated.View  style={[styles.circle,animatedStyle]}/>

        </Animated.View>

    </Pressable>
  )
}

export default AnimatedSwitch

const styles = StyleSheet.create({

    container:{
        width:40,
        borderRadius:20,

        paddingHorizontal:3,
        paddingVertical:2.5

    },
    circle:{
        height:15,
        width:15,
        borderRadius:100,
      backgroundColor:"white",
        elevation:5,
        shadowColor:"#000",
        shadowOffset:{height:10,width:0},
        shadowOpacity:0.6,
        shadowRadius:20
        
    }
})