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
  Image
} from 'react-native';


const icons = {
  Home: require("./assets/icon/tab_off_ic_home.png"),
  Cal: require("./assets/icon/tab_off_ic_date.png"),
  Edit: require("./assets/icon/tab_off_ic_edit.png"),
  Message: require("./assets/icon/tab_off_ic_message.png"),
};


// header
import {HeaderOption, FolderMenu} from '~/components/Header';
// page
import Main from '~/pages/Main';
import Msg from '~/pages/Msg';

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
        <Tab.Screen
            name="Main"
            component={Main}
            options={{
                headerRight: () => (<FolderMenu/>),
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={{
                              tintColor: focused? "#FFBF6A" : "#C4C4C4",
                              resizeMode: "contain",
                              height: 31,
                              width: 31
                        }}
                        source={icons.Home}
                    />
                ),
                tabBarLabel:() => {return null},
        }}/>
        <Tab.Screen
            name="Main2"
            component={Main}
            options={{
                headerTitle: '방울이',
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={{
                              tintColor: focused? "#FFBF6A" : "#C4C4C4",
                              resizeMode: "contain",
                              height: 31,
                              width: 31
                        }}
                        source={icons.Cal}
                    />
                ),
                tabBarLabel:() => {return null},

        }}/>
        <Tab.Screen
            name="Main3"
            component={Main}
            options={{
                  headerTitle: '푸름이',
                  tabBarIcon: ({ focused }) => (
                        <Image
                            style={{
                                  tintColor: focused? "#FFBF6A" : "#C4C4C4",
                                  resizeMode: "contain",
                                  height: 31,
                                  width: 31
                            }}
                            source={icons.Edit}
                        />
                  ),
                  tabBarLabel:() => {return null},
        }}/>
        <Tab.Screen
            name="Msg"
            component={Msg}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={{
                              tintColor: focused? "#FFBF6A" : "#C4C4C4",
                              resizeMode: "contain",
                              height: 31,
                              width: 31
                        }}
                        source={icons.Message}
                    />
                ),
                tabBarLabel:() => {return null},
        }}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
};


export default App;
