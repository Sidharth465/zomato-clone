import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { restaurantHeaderStyles  as styles} from 'src/unistyles/restuarantStyles'
import { SafeAreaView } from 'react-native-safe-area-context'

const Restaurant = () => {
  const {item} = useLocalSearchParams()
  const data = item ? JSON.parse(item) : null;


  return (
    <SafeAreaView>
      <Text>All Restaurant</Text>
    </SafeAreaView>
  )
}

export default Restaurant