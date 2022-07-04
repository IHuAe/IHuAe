import {atom, DefaultValue} from 'recoil';
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

const dayState = atom({
  key: 'dayState', // 유니크 ID
  default: {
    // 기본값
    dayCount: 1,
    initDay: new Date(),
  },
  effects: [
    syncAsyncStorage('dayState'),
    ({onSet}) => {
      onSet((newVal, oldVal, isReset) => {
        const nowTime = new Date().getTime();
        const initTime = new Date(newVal.initDay).getTime();
        const hour_gap = (nowTime-initTime)/1000/60/60;
        console.log(hour_gap);
        if (hour_gap >= 24){
          console.log('24시간 지남')
        } else{
          console.log('아직 안 지남')
        }
      })
    }
  ],
});

export {dayState};
