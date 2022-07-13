import {atom} from 'recoil';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageEffect =
  key =>
  ({setSelf, onSet, trigger}) => {
    const loadPersisted = async () => {
      const savedVal = await AsyncStorage.getItem(key);
      if (savedVal != null && savedVal != 'null') {
        setSelf(JSON.parse(savedVal));
      }
    };
    if (trigger === 'get') {
      loadPersisted();
    }
    onSet((newVal, _, isReset) => {
      if (isReset) {
        AsyncStorage.removeItem(key);
      } else {
        AsyncStorage.removeItem(key);
        AsyncStorage.setItem(key, JSON.stringify(newVal));
      }
    });
  };

const initDay = atom({
  key: 'initDay',
  default: {
    initDayInfo: new Date().toString(),
    nowInfo: new Date().toString(),
  },
  effects: [
    AsyncStorageEffect('initDay'),
    ({onSet, setSelf, resetSelf}) => {
      onSet((newVal, oldVal) => {
        console.log('newval');
        console.log(newVal);
        console.log('oldval');
        console.log(oldVal);
        setSelf({
          ...newVal,
          nowInfo: new Date().toString(),
        });
      });
      onSet(() => {});
    },
  ],
});

export {initDay};
