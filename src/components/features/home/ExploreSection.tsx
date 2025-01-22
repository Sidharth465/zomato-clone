import { View, Text, Pressable } from 'react-native'
import React, { FC, useState } from 'react'
import { homeStyles as styles } from 'src/unistyles/homeStyles'
import CustomText from '@components/ui/CustomText'
import { Colors } from 'src/unistyles/Constants'
import Icon from '@components/global/Icon'
import RecommendedList from '@components/list/RecommendedList'
import BreakerText from '@components/ui/BreakerText'
import RegularFoodList from '@components/list/RegularFoodList'

const ExploreSection: FC = () => {
  const [tabSelected, setTabSelected] = useState(1)
  return (
    <View style={styles.topHidingContainer}>
      <View style={styles.flexRowCenter}>
        <Pressable style={tabSelected === 1 ? styles.activeLeftTab : styles.inActiveLeftTab} onPress={() => setTabSelected(1)}>
          <CustomText color={tabSelected === 1 ? Colors.text : Colors.lightText} fontFamily='Okra-Medium' >Recommended</CustomText>
        </Pressable>
        <Pressable style={tabSelected === 2 ? styles.activeRightTab : styles.inActiveRightTab} onPress={() => setTabSelected(2)}>
          <Icon iconFamily='Ionicons' name='bookmark-outline' size={14} color={tabSelected === 2 ? Colors.text : Colors.lightText} />
          <CustomText color={tabSelected === 2 ? Colors.text : Colors.lightText} fontFamily='Okra-Medium' >Collection</CustomText>
        </Pressable>

      </View>

     <RecommendedList />
      <BreakerText  text="WHAT'S ON YOUR MIND"/>
      <RegularFoodList />
      <BreakerText  text="ALL RESTAURANTS"/>

    </View>
  )
}

export default ExploreSection