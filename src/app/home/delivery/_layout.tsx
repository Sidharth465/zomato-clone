import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DeliveryLayout = () => {
  return (
   <Stack initialRouteName='index' screenOptions={{headerShown:false}}>
    <Stack.Screen name='index'/>
    <Stack.Screen name='restaurant'/>
   </Stack>
  )
}

export default DeliveryLayout