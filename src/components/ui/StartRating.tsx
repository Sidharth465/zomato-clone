import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import CustomText from './CustomText'
import Icon from '@components/global/Icon'

const getRatingColor = (rating:number)=>
   {
    if(rating >= 4){
        return "#1C653C"
    }else if(rating >=3){
        return "#128145"
    }
    else if(rating >=2){
        return "#e67822"
    }
    else if(rating >=1){
        return "#953925"
    }else{
        return "#ccc"
    }
   }

const StartRating:FC<{rating:number}> = ({rating}) => {

    const backgroundColor =  getRatingColor(rating)
  return (
    <View style={[styles.container,{backgroundColor}]}>
      <CustomText color='#fff' fontFamily='Okra-Bold' fontSize={12}>{rating || '-'}</CustomText>
      <Icon name='star' iconFamily='MaterialIcons' color='#fff' size={16}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        paddingVertical:8,
        borderRadius:10,
        gap:5,
        paddingHorizontal:10,
        alignItems:"center",
        flexDirection:"row"
    }
})

export default StartRating