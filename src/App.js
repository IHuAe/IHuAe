import React, { Fragment } from 'react';
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
} from 'react-native';

// header
import {HeaderOption, FolderMenu} from '~/components/Header';
// page
import Main from '~/pages/Main';

// import styled-component
import styled, {css} from 'styled-components/native';

// react-navigation
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

// style

const App: () => Node = () => {
  return (    
    <NavigationContainer>    
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"/>       
    <Tab.Navigator
      screenOptions={HeaderOption}>
        <Tab.Screen name="Main" component={Main} options={{ headerRight: () => (<FolderMenu/>),}}/>    
        <Tab.Screen name="Main2" component={Main}  options={{ headerTitle: '방울이'}} />     
        <Tab.Screen name="Main3" component={Main} 
        options={{ 
          headerTitle: '푸름이',           
        }}/>
        <Tab.Screen name="Main4" component={Main}  />      
    </Tab.Navigator>
  </NavigationContainer>
  );
};


export default App;
