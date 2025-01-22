import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { FC, useState } from 'react'
import { filterStyles  as styles} from 'src/unistyles/filterStyles'
import Icon from '@components/global/Icon'
import { Colors } from 'src/unistyles/Constants'
import CustomText from '@components/ui/CustomText'

const SortingAndFilters:FC<{menutitlte:string,options:any}> = ({menutitlte,options}) => {
    const [activeSort,setActiveSort] =  useState<string|null>(null)


  return (
    <ScrollView keyboardShouldPersistTaps = "handled" nestedScrollEnabled horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterBar}>
        <Pressable onPress={()=>setActiveSort(null)} style={styles.filterItem}>
            <View style={{transform:[{rotate:"90deg"}]}}> 
                <Icon  name="tune-vertical-variant" iconFamily='MaterialCommunityIcons' color={Colors.text} size={16}/>
            </View>
            <CustomText fontFamily='Okra-Medium' fontSize={11}>{menutitlte}</CustomText>
            <Icon  name='caret-down' iconFamily='Ionicons' size={16} color={Colors.text}/>
        </Pressable>
{options?.map((i:string,index:number)=>{
    return(
        <Pressable  onPress={()=>setActiveSort(i)} style={[styles.filterItem,{backgroundColor:activeSort===i ? Colors.active:Colors.background}]} key={index}>
            <CustomText color={activeSort===i ? Colors.background:Colors.text}>{i}</CustomText>
        </Pressable>
    )
})}
    </ScrollView>
  )
}

export default SortingAndFilters