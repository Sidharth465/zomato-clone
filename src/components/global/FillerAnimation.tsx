import { BlurView } from '@react-native-community/blur';
import React, { useEffect, useRef, useState } from 'react';
import {
  BackHandler,
  Dimensions,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Reanimated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';




import CustomText from '@components/ui/CustomText';
import color from '@library/palette';
import { Colors } from 'src/unistyles/Constants';
import Icon from './Icon';
import localStorage from '@utils/localStorage';




const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const IS_IOS = Platform.OS === 'ios';
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || (IS_IOS ? 44 : 0);
const scale = (size: number) => (SCREEN_WIDTH / 375) * size;
const SEARCH_BAR_HEIGHT = IS_IOS ? 46 : 50;
const SEARCH_BAR_WIDTH_PERCENT = 0.82;
const SEARCH_BAR_BORDER_RADIUS = 10;
const HIGHLIGHT_BORDER_WIDTH = 2;

const getSearchBarPosition = () => {
  return {
    top: STATUS_BAR_HEIGHT + (IS_IOS ? 60 : 40),
    left: SCREEN_WIDTH * 0.02,
  };
};

const Filler5 = ({ setFillerVisible, handleInputFocus, fillerVisible }: { setFillerVisible: Function; handleInputFocus: Function; fillerVisible: Boolean }) => {
  const [isModalVisible, setModalVisible] = useState(true);
  const [animatedTextColor, setAnimatedTextColor] = useState<string>('');
  const animationRef = useRef(null);
  const searchBarDimensions = {
    height: SEARCH_BAR_HEIGHT,
    width: SCREEN_WIDTH * SEARCH_BAR_WIDTH_PERCENT,
    ...getSearchBarPosition(),
  };

  const heightAnim = useSharedValue(SCREEN_HEIGHT);
  const widthAnim = useSharedValue(SCREEN_WIDTH);
  const translateYAnim = useSharedValue(0);
  const translateXAnim = useSharedValue(0);
  const opacityAnim = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    width: widthAnim.value,
    height: heightAnim.value,
    transform: [{ translateY: translateYAnim.value }, { translateX: translateXAnim.value }],
    borderRadius: SEARCH_BAR_BORDER_RADIUS,
    opacity: opacityAnim.value,
  }));

  useEffect(() => {
    setAnimatedTextColor('black');

    if (!isModalVisible) return;

    opacityAnim.value = withTiming(1, { duration: 300 });
    widthAnim.value = withTiming(searchBarDimensions.width, { duration: 900 });
    heightAnim.value = withTiming(searchBarDimensions.height, { duration: 900 });
    translateYAnim.value = withTiming(searchBarDimensions.top, { duration: 900 });
    translateXAnim.value = withTiming(searchBarDimensions.left, { duration: 900 });
  }, [isModalVisible]);

  const backAction = async () => {
    setTimeout(() => {
      handleInputFocus();
    }, 600);
    setTimeout(() => {
      setFillerVisible(false);
      setModalVisible(false);
    }, 800);

    return fillerVisible  // Prevents default behavior (going back)
  };
  useEffect(() => {

    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, [fillerVisible]);
  const closeModal = async () => {
    opacityAnim.value = withTiming(0, { duration: 500 });
    console.log("first time done")
   
    setFillerVisible(false);
console.log("second time done")
await localStorage.setItem('isFirstExpDone', "true");
    if (animationRef.current) {
      animationRef.current.fadeOut(800);
    }
    setTimeout(() => {
      handleInputFocus();
    }, 600);
    setTimeout(() => {
      setFillerVisible(false);
      setModalVisible(false);
    }, 800);
  };

  const AnimatedPressable = Reanimated.createAnimatedComponent(Pressable);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={async () => {
          closeModal();


        }}
        style={{
          borderWidth: 1,
          borderColor: color['grey-1'],
          borderRadius: scale(20),
          paddingVertical: scale(8),
          paddingHorizontal: scale(16),
          position: 'absolute',
          top: '2%',
          left: '80%',
          zIndex: 99999,
        }}
      >
        <CustomText numberOfLine={1} color={Colors.background_light} style={{ fontSize: scale(16) }}>
          Skip
        </CustomText>
      </Pressable>
      <Pressable style={styles.pressableContainer}>
        {isModalVisible && (
          <Animatable.View
            ref={animationRef}
            animation="fadeIn"
            duration={800}
            style={styles.overlay}
          >
            <AnimatedPressable
              onPress={closeModal}
              style={[styles.highlightBorder, animatedStyle, { zIndex: 9999999999 }]}
            />

            <View style={[styles.searchContainer, searchBarDimensions]}>
              <Pressable
                onPress={closeModal}
                style={[
                  styles.searchInputContainer,
                  { height: searchBarDimensions.height, zIndex: 999 },
                ]}
              >
                {/* search icon */}
                <Icon
                  name="search"
                  color={Colors.border}
                  size={20}
                  iconFamily="Ionicons"
                />
                <TextInput
                  editable={false}
                  placeholder="Search Your Meal"
                  placeholderTextColor={Colors.text}
                  style={styles.searchInput}
                />
              </Pressable>
            </View>

            <BlurView style={styles.blurView} blurType="dark" blurAmount={1} />
          </Animatable.View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
  pressableContainer: { flex: 1 },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(20, 27, 49, 0.35)',
    // alignItems: 'center',
    // zIndex: 9999,
  },
  highlightBorder: {
    position: 'absolute',
    borderWidth: HIGHLIGHT_BORDER_WIDTH,
    borderColor: 'rgba(69, 140, 255, 1)',
  },
  searchContainer: { position: 'absolute', zIndex: 99999 },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scale(12),
    width: '100%',
    borderRadius: SEARCH_BAR_BORDER_RADIUS,
  },
  searchInput: {
    flex: 1,
    paddingVertical: scale(10),
    paddingHorizontal: scale(8),
    color: Colors.text,
    fontFamily: "Okra-Regular",
    fontSize: scale(15),
  },
  blurView: { position: 'absolute', width: '100%', height: '100%', zIndex: -1 },
});

export default Filler5;
