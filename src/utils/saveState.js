// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const saveState = (stateKey, state) => {
  //state를 문자열로 바꿔서 저장함. stateKey : 키 이름, state : 상태
  AsyncStorage.setState(`@IHuAe:${stateKey}`, JSON.stringify(state));
};

export default saveState;
