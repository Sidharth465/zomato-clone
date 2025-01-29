import React from "react";
import { Button, Image, Text, View } from "react-native";
import { useModalContext } from "src/providers/ModalProvider";
import { emptyStyles as style } from "src/unistyles/emptyStyles";

const Dining = () => {

const {modalInfo,setModalInfo} =  useModalContext()

const onOpenModal =()=>{
setModalInfo({
  content:<View>
    <Image style={{height:100,width:100}} resizeMode="contain" source={require("@assets/images/tree.png")}/>
    <Text>Hello from modal</Text>
  </View>,
  modalHeight:300,
  panEnabled:true,
  
},
)
}


 

  return (
    <View style={style.container}>
      <Image
        style={style.emptyImage}
        source={require("@assets/images/coming_soon.jpg")}
      />
<Button  title="Open sheet" onPress={()=>onOpenModal()}/>
     


    </View>
  );
};

export default Dining;
