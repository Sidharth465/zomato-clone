import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { restaurantStyles as styles } from 'src/unistyles/restuarantStyles'
import ScalePress from '@components/global/ScalePress'
import CustomText from '@components/ui/CustomText'
import StartRating from '@components/ui/StartRating'


const RestaurantCard :FC<{item:any}>= ({item}) => {

// 
    // onpress : nvaigate to restaurant screen params item

  return (
   <ScalePress  onPress={undefined}>
    <View style={styles.card}>

     <Image style={styles.image} source={{uri:item.imageUrl}}/>

     <View style={styles.info}>
        <View style={styles.textContainer}>
            <View style={styles.textPart}>
                <CustomText variant='h5'  numberOfLine = {1} fontFamily='Okra-Bold' style={styles.name}> {item?.name}</CustomText>
                <CustomText   numberOfLine = {1} fontFamily='Okra-Medium' style={styles.name}> {item?.time} • {item?.distance} • ₹150 for one</CustomText>

            </View>
            <StartRating  rating={item?.rating}/>


        </View>


     </View>

    </View >

   </ScalePress>
  )
}

export default RestaurantCard