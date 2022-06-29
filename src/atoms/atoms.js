import {atom} from 'recoil';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const syncState =
  key =>
  ({setSelf, onSet}) => {
    const savedState = AsyncStorage.getItem(key);
    if (savedState != null) {
      console.log(savedState);
      setSelf(JSON.parse(savedState));
      // 초기값 지정
    }
    onSet((newVal, oldVal, isReset) => {
      // 값이 변경될 때마다 값을 동기화
      isReset
        ? AsyncStorage.removeItem(key)
        : AsyncStorage.setItem(key, JSON.stringify(newVal));
    });
  };

const dayState = atom({
  key: 'dayState', // 유니크 ID
  default: {
    // 기본값
    dayCount: 1,
    initDay: new Date(),
  },
  effects: [
    ({onSet}) => {
      onSet(newVal => {
        console.log('new value! : ' + newVal, newVal.dayCount);
        // AsyncStorage.setItem('dayState', newVal);
      });
    },
    () => {
      AsyncStorage.setItem(
        'dayState',
        JSON.stringify({
          dayCount: 1,
          initDay: 2,
        }),
      );
      AsyncStorage.getItem('dayState', (err, result) => {
        if (err) {
          throw err;
        }
        const parseResult = JSON.parse(result);
        console.log(parseResult);
      });
    },
  ],
});

export {dayState};
