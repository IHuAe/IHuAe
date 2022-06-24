import React from 'react';
import {Image} from 'react-native';
// asset
import {Icons} from '~/assets';
// header
import {HeaderOption, FolderMenu} from '~/components';
// page
import {Main, FeelingCalendar, EmotionSuppressor, Diary} from '~/pages';

// react-navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {forModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
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
  )
}

export default TabNavigator;