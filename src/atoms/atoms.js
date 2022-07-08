import {atom, DefaultValue,} from 'recoil';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageEffect = key => ({setSelf, onSet, trigger}) => {
  const loadPersisted = async () => {    
    const savedVal = await AsyncStorage.getItem(key);
    console.log(typeof(savedVal));
    console.log(savedVal);
    if (savedVal != null && savedVal != 'null'){
      console.log('load');
      setSelf(JSON.parse(savedVal));
      console.log(JSON.parse(savedVal));
    }
  }
  if (trigger === 'get') {
    console.log('get');
    loadPersisted();
  }
  onSet((newVal, _, isReset) => {
    if (isReset){
      console.log('isreset');
      AsyncStorage.removeItem(key);
    } else{
      AsyncStorage.removeItem(key);
      console.log('new value store');
      console.log(newVal);
      AsyncStorage.setItem(key, JSON.stringify(newVal));
    }
  });
}

const initDay = atom({
  key: 'initDay',
  default: {
    initDayInfo: new Date(),
  },
  effects: [
    ({onSet , setSelf, resetSelf}) => {
      onSet((newVal, oldVal) => {    

        if (typeof(newVal.initDayInfo) == 'string'){
          setSelf({initDayInfo: new Date(newVal.initDayInfo)});
        }
        
        console.log('newval : ');
        console.log(newVal);
        console.log(typeof(newVal.initDayInfo));
        console.log('oldval : ');
        console.log(oldVal);
        console.log(typeof(oldVal.initDayInfo));
              });      
    },
    AsyncStorageEffect('initDay'),
    
  ],
});

export {initDay};
