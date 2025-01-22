import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import Icon from '@components/global/Icon'
import { RFValue } from 'react-native-responsive-fontsize'
import CustomText from './CustomText'

const BackToTopButton: FC<{ onPress: () => void }> = ({ onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.2} style={{ flexDirection: "row", alignItems: "center", gap: 6 }} onPress={onPress}>


            <Icon name='arrow-up-circle-outline' iconFamily='Ionicons' color='#fff' size={RFValue(15)} />
            <CustomText variant='h6' color='#fff' fontFamily='Okra-Bold'>Back to top</CustomText>
        </TouchableOpacity>
    )
}

export default BackToTopButton