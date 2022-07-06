import {atom, DefaultValue,} from 'recoil';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';


const syncAsyncStorage = key => ({setSelf, onSet}) => {
  setSelf(AsyncStorage.getItem(key).then(savedVal =>
    savedVal != null ?
    JSON.parse(savedVal)
    : new DefaultValue() // Abort initialization if no value was stored
    ));
  onSet((newVal, oldVal, isReset) => {
    // 상태기 변경되었을 때, AsyncStorage와 동기화
    isReset ?
    AsyncStorage.removeItem(key)
    : AsyncStorage.setItem(key, JSON.stringify(newVal));
  });
}

const initDay = atom({
  key: 'initDay',
  default: {
    initDayInfo: new Date(),
  },
  effects: [
    syncAsyncStorage('initDay'),   
    ({onSet}) => {
      onSet((newVal, oldVal) => {
        console.log(newVal, oldVal)
      })
    }
  ],
});

export {initDay};
