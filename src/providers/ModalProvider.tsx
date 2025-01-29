import BottomSheet from "@components/ui/BottomSheet";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, ViewStyle } from "react-native";



type TinitialState = {
    content:React.ReactNode;
    modalHeight:number;
    onBackPress?:()=>void;
    panEnabled?:boolean;
    withoutLine?:boolean;
    lineStyle?:ViewStyle;
    lineStyleContainer?:ViewStyle;
    contentContainerStyle?:any;

}



const initialState:TinitialState ={
    content: null,
    modalHeight: 0,
     contentContainerStyle:{},
    lineStyle:{},
    lineStyleContainer:{},
    onBackPress:()=>{},
    panEnabled:false,
    withoutLine:false,
  
}


interface ModalContextType {
    modalInfo:TinitialState;
    setModalInfo:React.Dispatch<React.SetStateAction<TinitialState>>;
    resetModal:()=>void;
    closeModal:()=>void;
    
}
const ModalContext = React.createContext<ModalContextType>({
    modalInfo: initialState,
    setModalInfo: () => {},
    resetModal: () => {},
    closeModal: () => {},
  });

  export  type BottomSheetRef = {
    scrollTo: (destination: number) => void;
  };




export const ModalProvider=({children}:{children:React.ReactNode})=>{
    const bottomSheetRef =  useRef<BottomSheetRef>( null);
    const [modalInfo,setModalInfo] = useState(initialState)

    // functions 
    const closeModal = useCallback(()=>{bottomSheetRef?.current?.scrollTo(0)},[])
    const resetModal = useCallback(() => {
        setModalInfo(initialState);
      }, []);


    //   effects
    useEffect(()=>{
        setModalInfo(initialState)

    },[])




    // console.log("modal info",modalInfo.content)

    return(<ModalContext.Provider value={{closeModal,modalInfo,resetModal,setModalInfo}}>
      <>
      {children }
      <View style={{position:"absolute", inset:0}}> 
      {modalInfo.content !==null  &&
     
     <BottomSheet

           ref={bottomSheetRef}
           withoutLine={modalInfo.withoutLine}
           panEnabled={modalInfo.panEnabled}
           onBackPress={modalInfo.onBackPress}
           modalHeight={modalInfo.modalHeight || 0}
           lineStyle={modalInfo.lineStyle}
           lineStyleContainer={modalInfo.lineStyleContainer}
           contentContainerStyle={modalInfo.contentContainerStyle}>
           {modalInfo.content}
         </BottomSheet>}
        
      </View>
      </>
       

    

    </ModalContext.Provider>)
}

export const useModalContext = () => {
    return React.useContext(ModalContext);
  };