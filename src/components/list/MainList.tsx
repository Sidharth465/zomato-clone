import ExploreSection from '@components/features/home/ExploreSection'
import RestaurentList from '@components/list/RestaurentList'
import { useSharedState } from '@library/context/SharedContext'
import React, { FC, useRef, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, SectionList, View, ViewToken } from 'react-native'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { restaurantStyles as styles } from 'src/unistyles/restuarantStyles'


const sectionListData = [
    {title: "Explore", data: [{}], renderItem: () => <ExploreSection />},
    {title: "Restaurents", data: [{}], renderItem: () => <RestaurentList/>},
]



const MainList: FC = () => {
const {scrollToTop,scrollYGlobal,scrollY} =  useSharedState()
const previousScrollYTopButton  = useRef<number>(0)
const previousScrollY  = useRef(0)
const sectionListRef = useRef<SectionList>(null)
const [isRestaurentVisible,setIsRestaurentVisible] = useState(false)
const [isNearEnd, setIsNearEnd] = useState(false)


    const handleScroll=(event:NativeSyntheticEvent<NativeScrollEvent>)=>{
        const currentScrollY = event?.nativeEvent?.contentOffset?.y;
        const isScrollingDown = currentScrollY >previousScrollY.current;
        scrollY.value = isScrollingDown ? withTiming(1,{duration:300}):withTiming(0,{duration:300});
        scrollYGlobal.value =  currentScrollY;
        previousScrollY.current = currentScrollY

        const containerHeight = event?.nativeEvent?.contentSize?.height;
        const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height
        const offset =  event?.nativeEvent?.contentOffset?.y;


        setIsNearEnd(offset + layoutHeight >= containerHeight -500 )
    }

    const handleScrollToTop = ()=>{
        scrollToTop()
        sectionListRef?.current?.scrollToLocation({
            itemIndex:0,
            sectionIndex:0,
            animated :true,
            viewPosition:0
        })

    }

    const backTOTopStyle = useAnimatedStyle(()=>{
        const isScrollingUp = scrollYGlobal.value < previousScrollYTopButton?.current && scrollYGlobal.value > 180;
        const opacity = withTiming(isScrollingUp && (isRestaurentVisible || isNearEnd) ? 1:0 ,{duration:300});
        const translateY = withTiming(isScrollingUp && (isRestaurentVisible || isNearEnd) ? 0:10 ,{duration:300});

        previousScrollYTopButton.current = scrollYGlobal.value
        return{
            opacity,transform:[{translateX:translateY}]

        }
    })

    const viewAblityConfig ={
        viewAreaCoveragePercentThreshold:80
    }
const onViewableItemChnaged =({viewableItems}:{viewableItems:Array<ViewToken>})=>{
    const restaurentVisible = viewableItems?.some(
        (item)=>item?.section?.title === "Restaurents" && item?.isViewable
    )

    setIsRestaurentVisible(restaurentVisible)


}
    return (
        <View>
            <SectionList sections={sectionListData} onScroll={handleScroll} overScrollMode='always' scrollEventThrottle={16} bounces={false}
            showsVerticalScrollIndicator ={false} keyExtractor={(item:any,index:any)=>item?.id ? item?.id?.toString():index?.toString()}
            contentContainerStyle={styles.listContainer}
            onViewableItemsChanged={onViewableItemChnaged}
            viewabilityConfig={viewAblityConfig}
            stickySectionHeadersEnabled ={true}
            nestedScrollEnabled

            />
        </View>
    )
}

export default MainList