import React, {useEffect, Suspense} from 'react';
import type {Node} from 'react';
// import tag

import {StatusBar, View, Text} from 'react-native';

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
      <Suspense fallback={<View><Text>Loading...</Text></View>}>
      <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <TabNavigator />
      </NavigationContainer>
      </Suspense>
    </RecoilRoot>
  );
};

export default App;
