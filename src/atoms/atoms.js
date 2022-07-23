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

let isTimer = false;

const updateTime = setSelf => {
  if (isTimer != false) {
    isTimer = true;
    console.log('timer');
    const timerFunc = setTimeout(() => {
      isTimer = false;
      setSelf(new Date().toString());
      clearTimeout(timerFunc);
      console.log('update Time');
      updateTime();
    }, 60000);
  }
};

const nowDay = atom({
  key: 'nowDay',
  default: new Date().toString(),
  effects: [
    ({onSet, setSelf, resetSelf}) => {
      onSet(() => {
        updateTime(setSelf);
      });
    },
  ],
});

const initDay = atom({
  key: 'initDay',
  default: {
    initDayInfo: new Date().toString(),
    nowInfo: new Date().toString(),
  },
  effects: [
    AsyncStorageEffect('initDay'),
    ({onSet, setSelf, resetSelf}) => {
      onSet(newVal => {
        setSelf({
          ...newVal,
          nowInfo: new Date().toString(),
        });
      });
    },
  ],
});

const message = atom({
  key: 'message',
  default: [],
  // id, message, sendTime
  effects: [AsyncStorageEffect('chatMessage')],
});

export {initDay, nowDay, message};
