import React, {Fragment} from 'react';
import type {Node} from 'react';
// import tag
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
// asset
import {Icons} from '~/assets';

// header
import {HeaderOption, FolderMenu} from '~/components';
// page
import {Main, FeelingCalendar, EmotionSuppressor, Diary} from './pages';

// import styled-component
import styled, {css} from 'styled-components/native';

// react-navigation
import {
  CurrentRenderContext,
  NavigationContainer,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from '@react-navigation/stack';
import {forModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

// recoil
import {RecoilRoot} from 'recoil';

const Tab = createBottomTabNavigator();

// style

const App: () => Node = () => {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Tab.Navigator screenOptions={HeaderOption}>
          {/* Main */}
          <Tab.Screen
            name="Main"
            component={Main}
            options={{
              headerRight: () => <FolderMenu />,
              tabBarIcon: ({focused}) => (
                <Image
                  style={{
                    tintColor: focused ? '#FFBF6A' : '#C4C4C4',
                    resizeMode: 'contain',
                    height: 31,
                    width: 31,
                  }}
                  source={Icons.Home}
                />
              ),
              tabBarLabel: () => {
                return null;
              },
            }}
          />
          {/* Calendar */}
          <Tab.Screen
            name="Calendar"
            component={FeelingCalendar}
            options={{
              tabBarIcon: ({focused}) => (
                <Image
                  style={{
                    tintColor: focused ? '#FFBF6A' : '#C4C4C4',
                    resizeMode: 'contain',
                    height: 31,
                    width: 31,
                  }}
                  source={Icons.Cal}
                />
              ),
              tabBarLabel: () => {
                return null;
              },
            }}
          />
          {/* Diary */}
          <Tab.Screen
            name="Diary"
            component={Diary}
            options={{
              headerTitle: '이후애',
              tabBarIcon: ({focused}) => (
                <Image
                  style={{
                    tintColor: focused ? '#FFBF6A' : '#C4C4C4',
                    resizeMode: 'contain',
                    height: 31,
                    width: 31,
                  }}
                  source={Icons.Edit}
                />
              ),
              tabBarLabel: () => {
                return null;
              },
            }}
          />
          {/* Emotion Suppressor */}
          <Tab.Screen
            name="Emotion Suppressor"
            component={EmotionSuppressor}
            options={{
              tabBarIcon: ({focused}) => (
                <Image
                  style={{
                    tintColor: focused ? '#FFBF6A' : '#C4C4C4',
                    resizeMode: 'contain',
                    height: 31,
                    width: 31,
                  }}
                  source={Icons.Message}
                />
              ),
              tabBarLabel: () => {
                return null;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
