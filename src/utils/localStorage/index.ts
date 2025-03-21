import AsyncStorage from "@react-native-async-storage/async-storage";



class LocalStorage{
    #value:string | null = null;
    async setItem(key:string,value:any){
        try {
            this.#value = JSON.stringify(value);
            await AsyncStorage.setItem(key,this.#value);    
        } catch (error) {
            console.log("error in setting item at local storage",error)
        }
    }
    async getItem(key:string){
        try {
            this.#value = await AsyncStorage.getItem(key);
            const data = JSON.parse(this.#value!);
            return data
        } catch (error) {
            console.log("error in getting item from local storage",error)
        }
    }
    async removeItem(key:string){
        try {
           await AsyncStorage.removeItem(key);
           console.log("item removed successfully")
        } catch (error) {
            console.log("error in removing item from local storage",error)
        }
    }
   async clear(){
      await  AsyncStorage.clear();
    }

}


const localStorage = new LocalStorage();
export default localStorage;