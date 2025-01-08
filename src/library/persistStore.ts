import AsyncStorage from "@react-native-async-storage/async-storage";

type Mode = "veg" | "non-veg";

class Storage {
  setPersistVegMode = async (mode: Mode) => {
    await AsyncStorage.setItem("mode", mode);
  };
  getPersistVegMode = async () => {
    let mode = await AsyncStorage.getItem("mode");
    return mode;
  };
  removePersistVegMode = async () => {
    await AsyncStorage.removeItem("mode");
  };
}

const PersistStorage = new Storage();
export default PersistStorage;
