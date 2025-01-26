import React, { useEffect } from "react";
import { BackHandler } from "react-native";



import { isIOS } from "./device";


const useBackAction = (callback:()=>boolean|null|undefined)=>{

    useEffect(()=>{
        if(isIOS) return;

        const backHandler = BackHandler.addEventListener('hardwareBackPress',callback);
        return ()=>backHandler.remove();

    },[callback])
}

export default useBackAction