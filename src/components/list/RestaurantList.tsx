import { View, Text, FlatList } from 'react-native'
import React, { FC } from 'react'
import CustomText from '@components/ui/CustomText'
import { cardStyles as styles } from 'src/unistyles/cardStyles'
import { recommendedListData } from '@utils/dummyData'
import RestaurantCard from './RestaurantCard'

const RestaurantList: FC = () => {


const renderItem  =(item:any)=>{
 
  return(
    <RestaurantCard item={item?.item}/>
  )
}
  
  return (
    <View>
      <CustomText fontFamily='Okra-Bold' fontSize={12} style={styles.centerText}>
        1823 restaurants delivering to you
      </CustomText>
      <CustomText fontSize={12} fontFamily='Okra-Medium' style={styles.centerText}>
        FEATURED
      </CustomText>
      <FlatList 
      data={recommendedListData}
      scrollEventThrottle={16} 
      bounces={false}
      showsVerticalScrollIndicator = {false}
      renderItem={renderItem}
      keyExtractor={(item:any)=>item?.id?.toString()}
      
      />
    </View>
  )
}

export default RestaurantList