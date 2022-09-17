import React from 'react';
import { Image } from 'react-native';
// asset
import { Icons } from '~/assets';
// header
import { HeaderOption, FolderMenu } from '~/components';
// page
import { Main, FeelingCalendar, EmotionSuppressor, Diary } from '~/pages';

// react-navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmotionSuppressor"
        component={EmotionSuppressor}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator screenOptions={HeaderOption}
        initialRouteName="Calendar"
      >
        {/* COMPONENT  Main */}
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            headerRight: () => <FolderMenu />,
            tabBarIcon: ({ focused }) => (
              <Image
                style={{
                  tintColor: focused ? '#8291E6' : null,
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
        {/* COMPONENT  Calendar */}
        <Tab.Screen
          name="Calendar"
          component={FeelingCalendar}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={{
                  tintColor: focused ? '#8291E6' : null,
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
        {/* COMPONENT  Diary */}
        <Tab.Screen
          name="Diary"
          component={Diary}
          options={{
            headerTitle: '이후애',
            tabBarIcon: ({ focused }) => (
              <Image
                style={{
                  tintColor: focused ? '#8291E6' : null,
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
        {/* COMPONENT  Emotion Suppressor */}
        <Tab.Screen
          name="StackNavigator"
          component={StackNavigator}
          options={{
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ focused }) => (
              <Image
                style={{
                  tintColor: focused ? '#8291E6' : null,
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
    </>
  );
};

export default TabNavigator;
