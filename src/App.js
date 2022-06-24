import React, {useEffect} from 'react';
import type {Node} from 'react';
// import tag
import {StatusBar} from 'react-native';
// react-navigation
import {NavigationContainer} from '@react-navigation/native';
// recoil
import {RecoilRoot} from 'recoil';
// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
// component
import TabNavigator from '~/components/TabNavigator';
// utils
import {saveState} from '~/utils';

const App: () => Node = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
