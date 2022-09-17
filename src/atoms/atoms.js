import { atom } from 'recoil';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// FUNCTION storage data effect
const AsyncStorageEffect =
  key =>
    ({ setSelf, onSet, trigger }) => {

      const loadPersisted = async () => {
        const savedVal = await AsyncStorage.getItem(key);

        if (savedVal != null) {
          setSelf(JSON.parse(savedVal));
        }
      };

      if (trigger === 'get') {
        loadPersisted();
      }

      onSet((newVal, _, isReset) => {
        console.log(newVal);
        if (isReset) {
          AsyncStorage.removeItem(key);
        } else {
          AsyncStorage.removeItem(key);
          console.log(newVal, key);
          AsyncStorage.setItem(key, JSON.stringify(newVal));
        }
      });
    };

const onLoadData = key => ({ onSet, setSelf, trigger }) => {
  const loadData = async () => {
    const savedVal = await AsyncStorage.getItem(key);

    if (savedVal != null) {
      console.log(savedVal)
      setSelf(JSON.parse(savedVal));

    } else {
      console.log('no data');
      AsyncStorage.removeItem(key);
      AsyncStorage.setItem(key, JSON.stringify(new Date().toString()));
    }
  }

  if (trigger === 'get') {
    loadData();
  }

}

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

// PARAM 현재 날짜
const nowDay = atom({
  key: 'nowDay',
  default: new Date().toString(),
});

// PARAM 앱 최초 실행일
const initDay = atom({
  key: 'initDay',
  default: new Date().toString(),
  effects: [
    onLoadData('initDay'),
  ],
});

// PARAM 첫 실행 시
const isFirstLoaded = atom({
  key: 'isFirstLoaded',
  default: false,
});

// PARAM 메세지
const message = atom({
  key: 'message',
  default: [],
  // id, message, sendTime
  effects: [AsyncStorageEffect('chatMessage')],
});

export { isFirstLoaded, initDay, nowDay, message };
