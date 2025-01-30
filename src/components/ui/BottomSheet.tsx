import Animated, {
  runOnJS,
  withTiming,
  useSharedValue,
  useAnimatedProps,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React, { useRef, useState } from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {Gesture, GestureDetector, Pressable} from 'react-native-gesture-handler';
import Icon from "@expo/vector-icons/MaterialIcons"


import {HEIGHT, HEIGHT_SCR, isIOS} from '@utils/device';
import { useModalContext } from 'src/providers/ModalProvider';
import useBackAction from '@utils/hooks';


const MAX_HEIGHT = isIOS ? HEIGHT : HEIGHT_SCR;

export type BottomSheetProps = {
  children: React.ReactNode;
  modalHeight: number;
  onBackPress?: () => void;
  panEnabled?: boolean;
  withoutLine?: boolean;
  lineStyle?: ViewStyle;
  lineStyleContainer?: ViewStyle;
  contentContainerStyle?: any;
};

export type BottomSheetRef = {
  scrollTo: (destination: number) => void;
};

const BottomSheet = React.forwardRef<BottomSheetRef, BottomSheetProps>(
  (
    {
      children,
      modalHeight,
      onBackPress,
      lineStyle,
      lineStyleContainer,
      panEnabled = true,
      withoutLine = false,
      contentContainerStyle,
    },
    ref,
  ) => {
    const MAX_TRANSLATE_Y =
      (modalHeight > 0 ? -modalHeight : modalHeight) || -MAX_HEIGHT + 50;

    const {resetModal} = useModalContext();
    const active = useSharedValue(true);
    const translateY = useSharedValue(0);
    const prevTranslateY = useRef(0);
    const context = useSharedValue({y: 0});
    const [isActive, setIsActive] = React.useState(false);
    const [isPanEnabled, setIsPanEnabled] = React.useState(panEnabled);
    
   

    //** ----- STYLES -----
    const animBottomSheetStyle = useAnimatedStyle(
      () => ({transform: [{translateY: translateY.value}]}),
      [],
    );

    const rBackdropStyle = useAnimatedStyle(
      () => ({opacity: withTiming(active.value ? 1 : 0)}),
      [],
    );

    const rBackdropProps = useAnimatedProps(
      () => ({
        pointerEvents: active.value
          ? ('auto' as 'box-none' | 'none' | 'box-only' | 'auto')
          : ('none' as 'box-none' | 'none' | 'box-only' | 'auto'),
      }),
      [],
    );

    const bottomSheetStyles = [
      styles.bottomSheetContainer,
      contentContainerStyle,
      animBottomSheetStyle,
    ];

    //** ----- FUNCTIONS -----
    const scrollTo = React.useCallback(
      (destination: number) => {
        'worklet';

        runOnJS(setIsActive)(destination !== 0);
        active.value = destination !== 0;
        translateY.value = withTiming(destination, {duration:300}, done => {
          if (done && destination === 0) {
            runOnJS(resetModal)();
          }
        });
      },
      [active, resetModal, translateY],
    );

    const onBackdropPress = React.useCallback(() => {
      // Dismiss the BottomSheet
      !!onBackPress && onBackPress();
      scrollTo(0);
    }, [scrollTo, onBackPress]);

    const onBackHandlerPress = React.useCallback(() => {
      if (isActive) {
        scrollTo(0);
        return true;
      }
    }, [isActive, scrollTo]);

    //** ----- EFFECTS -----
    useBackAction(onBackHandlerPress);

    React.useImperativeHandle(ref, () => ({scrollTo}), [scrollTo]);

    React.useEffect(() => {
      panEnabled !== isPanEnabled && setIsPanEnabled(panEnabled);
    }, [panEnabled, isPanEnabled]);

    React.useEffect(() => {
      scrollTo(-modalHeight/2); // Animate from below the screen to the modalHeight
    }, [modalHeight]);

    //** ----- GESTURES -----
    const gesture = Gesture.Pan()
  .enabled(isPanEnabled)
  .onStart(() => {
    context.value = {y: translateY.value};
  })
  .onUpdate(event => {
    translateY.value = event.translationY + context.value.y;
    translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
  })
  .onEnd((e) => {

    console.log("translate value",translateY.value)
    console.log("on end",e?.translationY)
    if (translateY.value >= 0) {

      scrollTo(0);
    } else {
      // Dragging down
      !!onBackPress && runOnJS(onBackPress)();
      scrollTo(translateY.value);
    }
  });


    const wrappedChildren =
      -MAX_TRANSLATE_Y === 0.9 * HEIGHT ? (
        <View style={{height: -MAX_TRANSLATE_Y - 40}}>{children}</View>
      ) : (
        children
      );


      const closeSheet = ()=>{
        scrollTo(0)
      }

  

    return (
      <>
        <Animated.View
          onTouchStart={onBackdropPress}
          animatedProps={rBackdropProps}
          style={[styles.backdrop, rBackdropStyle]}
        />
        <GestureDetector gesture={gesture}>
          <Animated.View style={bottomSheetStyles}>
           
            {!withoutLine && (
              <View style={[styles.borderRadius, lineStyleContainer]}>
                <View style={[styles.line, lineStyle]} />
               <Pressable onPress={closeSheet} style={{position:"absolute",right:2,top:2}}>
               <Icon  name='cancel' size={30} color={"gray"}/>
               </Pressable>
              </View>
            )}
       
            
             <Animated.ScrollView >
            {wrappedChildren}
            </Animated.ScrollView>
          </Animated.View>
        </GestureDetector>
      </>
    );
  },
);

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex:0
  },
  bottomSheetContainer: {
    height: MAX_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: MAX_HEIGHT*0.7,
    borderRadius: 18,
    zIndex:10
  },
  borderRadius: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomWidth:2,
    borderColor:"#FAFAFA",
    paddingBottom:5

    

  },
  line: {
    width: 40,
    height: 4,
    borderRadius: 2,
    marginTop: 8,
    marginBottom: 16,
    alignSelf: 'center',
    backgroundColor: '#121212',
  },
  
});

export default React.memo(BottomSheet);
