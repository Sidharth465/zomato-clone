import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { cardStyles as styles } from 'src/unistyles/cardStyles'
import { recommendedListData } from '@utils/dummyData'
import ScalePress from '@components/global/ScalePress'
import { router } from 'expo-router'
import CustomText from '@components/ui/CustomText'
import { Colors } from 'src/unistyles/Constants'
import CustomGradient from '@components/global/CustomGradient'

const RecommendedList:FC = () => {


  const renderItem =({item}:any)=>{

    return(
      <ScalePress  style={styles.itemContainer}    onPress={()=>router.push({pathname:"/home/delivery/restaurant",params:{item:JSON.stringify(item)}})}>
        <View style={styles.imageContainer}>
          <Image source={{uri:item.imageUrl}} style={styles.itemImage}/>
          {item?.discount && (
            <View style={[styles.discountContainer]}>
              <CustomText color={Colors.background} fontSize={10} fontFamily='Okra-Bold'>
                { item?.discount}
              </CustomText>
              {item?.discountAmount && (
                <CustomText style={{lineHeight:11}} color={Colors.background} fontSize={9} fontFamily='Okra-Medium' >
                  {item?.discountAmount}
                </CustomText>
              )}
            </View>
          )}

          <TouchableOpacity style={styles.bookmarkIcon}>
            <Image style={styles.bookmarkIconImage} source={require("@assets/icons/bookmark.png")}/>
          </TouchableOpacity>
          <CustomGradient position ="bottom" mode='dark'/>
        </View>
        

        <View style={styles.itemInfo}>
          <CustomText  numberOfLine={1} fontSize={10} fontFamily='Okra-Medium' color={Colors.text}>{item?.name}</CustomText>
          <View style={[styles.flexRow,{alignItems:"center"}]}>
            <Image style={styles.clockIcon} source={require("@assets/icons/clock.png")}/>
            <CustomText numberOfLine={1} fontFamily='Okra-Medium' color={Colors.lightText}>
              {`${item?.time}  • ${item?.distance}`}
            </CustomText>

          </View>
        </View>
      </ScalePress>
    )
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
      <FlatList  numColumns={Math.ceil(recommendedListData?.length/2)}
      data={recommendedListData}
      renderItem={renderItem}
      scrollEnabled={false}
      keyExtractor={(item:any)=>item?.id?.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      style={styles.recommendedContainer}
      />
      

    </ScrollView>
  )
}

export default RecommendedList