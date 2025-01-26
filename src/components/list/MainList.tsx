import ExploreSection from '@components/features/home/ExploreSection'
import SortingAndFilters from '@components/features/home/SortingAndFilters'
import RestaurantList from '@components/list/RestaurantList'
import BackToTopButton from '@components/ui/BackToTopButton'
import { useSharedState } from '@library/context/SharedContext'
import { filtersOption } from '@utils/dummyData'
import React, { FC, useRef, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, SectionList, ViewToken } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { restaurantStyles as styles } from 'src/unistyles/restuarantStyles'


const sectionListData = [
    { title: "Explore", data: [{}], renderItem: () => <ExploreSection /> },
    { title: "Restaurants", data: [{}], renderItem: () => <RestaurantList /> },
]



const MainList: FC = () => {
    const {  scrollYGlobal, scrollY } = useSharedState()
    const previousScrollYTopButton = useRef<number>(0)
    const previousScrollY = useRef(0)
    const sectionListRef = useRef<SectionList>(null)
    const [isRestaurentVisible, setIsRestaurentVisible] = useState(false)
    const [isNearEnd, setIsNearEnd] = useState(false)


    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentScrollY = event?.nativeEvent?.contentOffset?.y;
        const isScrollingDown = currentScrollY > previousScrollY.current;
        scrollY.value = isScrollingDown  ? withTiming(1, { duration: 300 }) : withTiming(0, { duration: 300 });
        scrollYGlobal.value = currentScrollY;
        previousScrollY.current = currentScrollY

        const containerHeight = event?.nativeEvent?.contentSize?.height;
        const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height
        const offset = event?.nativeEvent?.contentOffset?.y;


        setIsNearEnd(offset + layoutHeight >= containerHeight - 500)
    }

    const handleScrollToTop = () => {
            sectionListRef?.current?.scrollToLocation({
                sectionIndex: 0, // Index of the section to scroll to
                itemIndex: 0,    // Index of the item in the section
                animated: true,  // Smooth scrolling
                viewPosition: 0, // Align to the top of the view
            });
        
    };
    

    const backToTopStyle = useAnimatedStyle(() => {
        const isScrollingUp = scrollYGlobal.value < previousScrollYTopButton?.current && scrollYGlobal.value > 180;
        const opacity = withTiming(isScrollingUp && (isRestaurentVisible || isNearEnd) ? 1 : 0, { duration: 300 });
        const translateY = withTiming(isScrollingUp && (isRestaurentVisible || isNearEnd) ? 0 : 10, { duration: 300 });

        previousScrollYTopButton.current = scrollYGlobal.value
        return {
            opacity, transform: [{ translateX: translateY }]

        }
    })

    const viewAblityConfig = {
        viewAreaCoveragePercentThreshold: 80
    }
    const onViewableItemChnaged = ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
        const restaurentVisible = viewableItems?.some(
            (item) => item?.section?.title === "Restaurants" && item?.isViewable
        )

        setIsRestaurentVisible(restaurentVisible)


    }

    
    return (
        <>
            <Animated.View style={[styles.backToTopButton, backToTopStyle]}>
                <BackToTopButton onPress={handleScrollToTop} />

            </Animated.View>
            <SectionList  ref={sectionListRef} sections={sectionListData} onScroll={handleScroll} overScrollMode='always' scrollEventThrottle={16} bounces={false}
                renderSectionHeader={({ section }) => {
                    if (section.title !== "Restaurants") {
                        return null;
                    }
                    return (
                        <Animated.View style={[isRestaurentVisible || isNearEnd ? styles.shadowBottom : null]}>
                            <SortingAndFilters menutitlte="Sort" options={filtersOption} />
                        </Animated.View>
                    )
                }}
                showsVerticalScrollIndicator={false} keyExtractor={(item: any, index: any) => item?.id ? item?.id?.toString() : index?.toString()}
                contentContainerStyle={styles.listContainer}
                onViewableItemsChanged={onViewableItemChnaged}
                viewabilityConfig={viewAblityConfig}
                stickySectionHeadersEnabled={true}
                nestedScrollEnabled

            />
        </>
    )
}

export default MainList